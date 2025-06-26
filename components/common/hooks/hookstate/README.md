# HookState Controller Pattern:

This pattern involves two files HookStateController and appController.

## HookStateController.js

This is a generic controller that provides us all the helper functions that we will be using in our application to manage our states.

Suppose our initial state is:

```
{
  liveChat: '',
  callId: {},
  aroundLatLng: null,
  aroundLatLngGeoState: null,

  currentLocation: {},
  myLocation: null,
  storeLocation: null,

  passedAgeGate: null,
  hideDeliveryModal: null,
  stateModalBox: null,
  storeTypeModal: null,
  orderTypeModal: null
}
```

And our current state is:

```
{
    liveChat: 'jgfuywgruy728346823ghdjgfs',
    callId: '73648324768',
    aroundLatLng: '32.765, 71.561',
    aroundLatLngGeoState: 'california',
    currentLocation: {geoState:'arizona',slug:'mesa'},
    myLocation: {geoState:'arizona',id:'mesa',idType:'SLUG',storeType:'recreational',orderType:'pickup'},
    storeLocation: null,
    passedAgeGate: 'verified',
    hideDeliveryModal: 'hide',
    stateModalBox: 'hide',
    storeTypeModal: 'appeared',
    orderTypeModal: 'appeared'
}
```

- **setState (newState)**: This performs a reset and adds new state to hookstate.

When we call:

```
const newState={
  liveChat: 'bfhdjvb2738hdbdjfb'
  passedAgeGate: 'verified',
  stateModalBox: 'viewed',
  orderTypeModal: 'hide'
}

HookStateController.setState(newState)
```

This will reset the whole state to initial value and then sets the specified keys.So, the state becomes:

```
{
  liveChat: 'bfhdjvb2738hdbdjfb',
  callId: {},
  aroundLatLng: null,
  aroundLatLngGeoState: null,
  currentLocation: {},
  myLocation: null,
  storeLocation: null,
  passedAgeGate: 'verified',
  hideDeliveryModal: null,
  stateModalBox: 'viewed',
  storeTypeModal: null,
  orderTypeModal: 'hide'
}
```

- **update (partialState)**: It partially updates the state.

When we call:

```
const newState={
  myLocation:{ geoState:'new-jersey',orderType:'delivery' }
  stateModalBox: 'viewed',
  orderTypeModal: 'hide',
  storeTypeModal: null
}

HookStateController.update(newState)
```

This will not reset the whole state to initial value. It only modifies the passes keys. Thus the state becomes:

```
{
  liveChat: 'jgfuywgruy728346823ghdjgfs',
  callId: '73648324768',
  aroundLatLng: '32.765, 71.561',
  aroundLatLngGeoState: 'california',
  currentLocation: {geoState:'arizona',slug:'mesa'},
  myLocation:{ geoState:'new-jersey',orderType:'delivery' },
  storeLocation: null,
  passedAgeGate: 'verified',
  hideDeliveryModal: 'hide',
  stateModalBox: 'viewed',
  storeTypeModal: null,
  orderTypeModal: 'hide'
}
```

- **partialUpdateKey (key, obj)**: It partially updates the given key of the state.

When we call:

```
  HookStateController.partialUpdateKey('myLocation',{geoState:'nevada', id:'reno'})
```

This will only update the _geoState_ and _orderType_ of _myLocation_ key in the state and our state becomes:

```
{
  liveChat: 'jgfuywgruy728346823ghdjgfs',
  callId: '73648324768',
  aroundLatLng: '32.765, 71.561',
  aroundLatLngGeoState: 'california',
  currentLocation: {geoState:'arizona',slug:'mesa'},
  myLocation: {geoState:'nevada',id:'reno',idType:'SLUG',storeType:'recreational',orderType:'pickup'},
  storeLocation: null,
  passedAgeGate: 'verified',
  hideDeliveryModal: 'hide',
  stateModalBox: 'hide',
  storeTypeModal: 'appeared',
  orderTypeModal: 'appeared'
}
```

- **reset ()**: Resets the whole state back to initial state
- **useState (keys, stateValuesKey)**: used by components to get specified keys as hook. It also return **_stateValues_** which includeS all values.

Example usage:

```
  const {myLocation,liveChat,stateValues}=HookStateController.useState(['myLocation','liveChat','passedAgeGate'])


  useEffect(()=>{
    console.log(stateValues.passedAgeGate)
    console.log(stateValues.liveChat)
    console.log(stateValues.myLocation)
  },[myLocation,passedAgeGate,liveChat])

  // Note that from stateValues we can directly get the values of myLocation,passedAgeGate and liveChat.
  // However, we can also get the value like:

  console.log(myLocation.get({noProxy:true}));

  // But it is always a good practice to get values form stateValues and only use the hooks for listening.
```

- **getValue (key)**: used by functions or any thing that don't require a re render to get a value from state.

Example Usage:

```
  function getDistanceFromUser(){
    const aroundLatLng=HookStateController.getValue('aroundLatLng')

    console.log(aroundLatLng) // will print '32.765, 71.561'

    aroundLatLng = aroundLatLng.split(', ')
    const referencePoint = turf.point([Number(aroundLatLng[0]), Number(aroundLatLng[1])])
    const location = turf.point([Number(storeLat), Number(storeLong)])
    const distance = turf.distance(referencePoint, location, {units: 'miles'})
    return Math.round(distance)
  }
```

- **getValues (keys)**: used by functions or any thing that don't require a re render to get values of given keys from the state.

Example Usage:

```
  function getDistanceFromUser(){
    const {aroundLatLng,aroundLatLngGeoState}=HookStateController.getValues(['aroundLatLng','aroundLatLngGeoState'])

    console.log(aroundLatLng) // will print '32.765, 71.561'
    console.log(aroundLatLngGeoState) // will print  'california'

    if(aroundLatLngGeoState &&aroundLatLng){
      aroundLatLng = aroundLatLng.split(', ')
      const referencePoint = turf.point([Number(aroundLatLng[0]), Number(aroundLatLng[1])])
      const location = turf.point([Number(storeLat), Number(storeLong)])
      const distance = turf.distance(referencePoint, location, {units: 'miles'})
      return Math.round(distance)
    }
  }
```

## appController

This is our main controller taht we will be using everywhere for state management. It inherits all the helper function of HookStateController along with some additional functionalities.

### initialState:

All the global level application states are defined inside **_'initialState'_**:

```
  const initialState={
    liveChat: '',
    callId: {},
    aroundLatLng: null,
    aroundLatLngGeoState: null,
    currentLocation: {},
    myLocation: null,
    storeLocation: null,
    passedAgeGate: null,
    hideDeliveryModal: null,
    stateModalBox: null,
    storeTypeModal: null,
    orderTypeModal: null
  }
```

### cookies:

This is where all the cookies are defined along with their associated stateKey.

```
const cookies = [
  {stateKey: 'myLocation', cookieKey: 'myLocation'},
  {stateKey: 'passedAgeGate', cookieKey: 'resp-agev-age-verification-passed'},
  {stateKey: 'hideDeliveryModal', cookieKey: 'delivery-modal'},
  {stateKey: 'stateModalBox', cookieKey: 'state-modal-box'},
  {stateKey: 'storeTypeModal', cookieKey: 'store-type-modal'},
  {stateKey: 'orderTypeModal', cookieKey: 'order-type-modal'}
]
```
