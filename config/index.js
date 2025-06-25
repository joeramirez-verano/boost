import {CURRENT_GEO_STATE, DEFAULT_MAPBOX_ACCESS_TOKEN, GEOSTATE, MAPBOX_ACCESS_TOKEN} from './constant'

/**
 *
 * @param props0
 * @param props0.children
 * @param props0.geoState
 */
export function GeoStateFlag({children, geoState}) {
  return <>{CURRENT_GEO_STATE === geoState && <> {children}</>}</>
}
export const isGeoState = (geoState, currentGeoState) => {
  if (currentGeoState) return currentGeoState === geoState

  return CURRENT_GEO_STATE === geoState
}

export const REVALIDATE = 60 * 5

export const MAPBOX = {
  [GEOSTATE.FLORIDA]: {
    DEFAULT_MAPBOX_ACCESS_TOKEN: DEFAULT_MAPBOX_ACCESS_TOKEN, // this will not be exposed to users as its being used by api
    MAPBOX_TOKEN: MAPBOX_ACCESS_TOKEN,
    MAP_STYLE: 'mapbox://styles/veranodev/cl2wpztkg002w14mrdr12u51s',
    USER_NAME: 'veranodev',
    STYLE_ID: 'cl2wpztkg002w14mrdr12u51s',
    PIN: 'pin-l-u+f74e4e',
    DEFAULT_VIEW_PORT: {
      // latitude: 27.81146,
      // longitude: -83.33315,
      // zoom: 6.2,
      latitude: 27.810256323581513,
      longitude: -83.22819092171736,
      zoom: 6.262581952727504,
      // latitude: 27.87276580971603,
      // longitude: -83.77028252339367,
      // zoom: 6.043827470048468,
      maxBounds: [
        [-87.634938, 24.523096], // Southwest coordinates
        [-79.031362, 31.000888] // Northeast coordinates
        // [-87.90642824839973, 24.040817855889912], // Southwest coordinates
        // [-79.63413679838762, 31.5738516194169] // Northeast coordinates
      ]
    }
  },
  [GEOSTATE.USA]: {
    DEFAULT_MAPBOX_ACCESS_TOKEN: DEFAULT_MAPBOX_ACCESS_TOKEN, // this will not be exposed to users as its being used by api
    MAPBOX_TOKEN: MAPBOX_ACCESS_TOKEN,
    MAP_STYLE: 'mapbox://styles/veranodev/cl2woxfdd001614nzeu9rgeib',
    USER_NAME: 'veranodev',
    STYLE_ID: 'cl2woxfdd001614nzeu9rgeib',
    PIN: 'pin-s-z+000',
    DEFAULT_VIEW_PORT: {
      latitude: 29.7805,
      longitude: -95.3863,
      zoom: 3.5
    }
  }
}

export const MAP_BOX_SETTINGS = MAPBOX[CURRENT_GEO_STATE]
