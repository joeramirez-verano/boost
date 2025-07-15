import { focusAtom } from 'jotai-optics';
import { useAtom, atom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { store } from '../jotai-provider';

// Base Class for Jotai State Controller
export class StateController {
    store;
    state;
    focusState;
    initialState;

    activeSubscriptions = new Map();

    constructor(initialState) {
        const controllerName = this.constructor.className
        if (typeof window !== 'undefined' && window[controllerName]) {
          const existing = window[controllerName].getStoreKeys()
    
          this.store = existing.store
          this.initialState = existing.initialState
          this.state = existing.state
          this.focusState = existing.focusState
          this.activeSubscriptions = existing.activeSubscriptions
        } else {
          this.store = store
          this.initialState = initialState
          this.state = atom(this.initialState)
          this.focusState = {}
          Object.keys(initialState).forEach((key) => {
            this.getFocusItem(key)
          })
    
          if (typeof window !== 'undefined') {
            window[controllerName] = this
          }
        }
      }
    
      getStoreKeys() {
        return this
      }

    getFocusItem(key) {
        if (!this.focusState[key]) {
            this.focusState[key] = focusAtom(this.state, optic =>
                key.split('.').reduce((acc, part) => acc.prop(part), optic)
            );
        }
        return this.focusState[key];
    }

    useGenericHooks(keys) {
        const keysVal = {};
        keys.forEach(key => {
            const [value] = useAtom(this.getFocusItem(key));
            keysVal[key] = value;
        });
        return keysVal;
    }

    useState(keys) {
        return this.useGenericHooks(keys);
    }

    useScopeState(key) {
        if (!this.focusState[key]) {
            this.focusState[key] = focusAtom(this.state, optic =>
                key.split('.').reduce((acc, part) => acc.prop(part), optic)
            );
        }
        return useAtom(this.focusState[key]);
    }

    useHydration(state) {
        const hydratedStates = [];
        Object.keys(state).forEach(key => {
            this.getFocusItem(key);
            hydratedStates.push([this.focusState[key], state[key]]);
        });
        useHydrateAtoms(hydratedStates);
        this.updateState(state);
    }

    setState(newState) {
        Object.keys(newState).forEach(key => {
            this.getFocusItem(key);
        });
        // Merge the initial state with the previous state
        const updatedState = { ...this.initialState, ...newState };

        // Set the updated state directly
        store.set(this.state, updatedState);
    }

    updateState(newState) {
        Object.keys(newState).forEach(key => {
            this.getFocusItem(key);
        });
        // Get the current state value
        const prevState = store.get(this.state);

        // Merge the new state with the previous state
        const updatedState = { ...prevState, ...newState };
        // Set the updated state directly
        store.set(this.state, updatedState);
    }

    getValues(keys) {
        const returnValues = {};
        keys.forEach(key => {
            returnValues[key] = store.get(this.focusState[key]);
        });
        return returnValues;
    }

    getValue = key => {
        try {
            return this.focusState[key] ? store.get(this.focusState[key]) : null;
        } catch {
            throw Error(`Key: ${key} does not exist in initial State`);
        }
    };

    resetAll() {
        store.set(this.state, this.initialState);
    }

    resetStates(keys) {
        keys.forEach(key => {
            store.set(this.focusState[key], this.initialState[key]);
        });
    }

    resetState(key) {
        store.set(this.focusState[key], this.initialState[key]);
    }

    bindMethods(instance) {
        let proto = Object.getPrototypeOf(instance);
        // Get all properties including inherited ones
        const propertyNames = Object.getOwnPropertyNames(proto).filter(
            prop => typeof instance[prop] === 'function' && prop !== 'constructor'
        );
        // Iterate through all properties
        propertyNames.forEach(name => {
            const property = this[name];

            // Only bind if it's a method (function) and not the constructor
            if (typeof property === 'function' && name !== 'constructor') {
                // Bind the method to this instance
                (this)[name] = property.bind(this);
            }
        });
    }


    autoSubscribeOnMethods(instance) {
        // Get all properties including inherited ones
        const propertyNames = Object.getOwnPropertyNames(instance).filter(
            prop => typeof instance[prop] === 'function' && prop !== 'constructor'
        );
        // Find all methods that start with 'on'
        propertyNames.forEach(name => {
            if (name.startsWith('on') && typeof this[name] === 'function') {
                try {
                    // Call the method and store the unsubscribe function if returned
                    const unsubscribe = (this[name])();
                    if (typeof unsubscribe === 'function') {
                        this.activeSubscriptions.set(name, unsubscribe);
                    }
                } catch (error) {
                    console.error(`Error auto-subscribing method ${name}:`, error);
                }
            }
        });
    }

}