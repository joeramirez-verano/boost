const CURRENT_GEO_STATE = process.env.NEXT_PUBLIC_GEOSTATE || 'usa'
const CURRENT_BRAND = process.env.NEXT_PUBLIC_BRAND || 'ZLD'
const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
const GOOGLE_ANALYTICS_4_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_4_ID
const GOOGLE_TAG_MANAGER_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
const RECAPCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY
const KLAVIYO_KEY = process.env.KLAVIYO_KEY
const KLAVIYO_COMPANY_ID = process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID
const KLAVIYO_MARYLAND_FORM_LIST_ID = process.env.NEXT_PUBLIC_KLAVIYO_MARYLAND_FORM_LIST_ID
const MONDAY_API_KEY = process.env.MONDAY_API_KEY
const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
const PURGE_CACHE_WEBHOOK = process.env.NEXT_PUBLIC_PURGE_CACHE_WEBHOOK
const CLEAN_REBUILD_WEBHOOK = process.env.NEXT_PUBLIC_CLEAN_REBUILD_WEBHOOK
const DEFAULT_MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_DEFAULT_MAPBOX_ACCESS_TOKEN // this will not be exposed to users as its being used by api
const MANIFEST_START_URL = process.env.NEXT_PUBLIC_MANIFEST_START_URL || 'http://localhost:3000'

const GEOSTATE = {
  FLORIDA: 'florida',
  USA: 'usa'
}

const BRAND = {
  ZLD: 'ZLD'
}

const STORE_URL = {
  ZLD: 'https://zenleafdispensaries.com'
}

const APP_URLS = {
  [BRAND.ZLD]: 'https://apps.apple.com/us/app/zen-leaf/id6448922214',
}

const APP_IMAGES = {
  [BRAND.ZLD]: {
    ios: 'https://admin.zenleafdispensaries.com/wp-content/uploads/2024/09/ios-app-button.svg',
    android: 'https://admin.zenleafdispensaries.com/wp-content/uploads/2024/09/android-app-button.svg'
  }
}

const API_URL = process.env.VERCEL_ENV === 'development' ? 'http://localhost:3000/' : process.env.NEXTAUTH_URL

const BRAND_DATA = {
  [BRAND.ZLD]: {
    states: [
      {
        title: 'Arizona',
        slug: 'arizona'
      },
      {
        title: 'Connecticut',
        slug: 'connecticut'
      },
      {
        title: 'Illinois',
        slug: 'illinois'
      },
      {
        title: 'Maryland',
        slug: 'maryland'
      },
      {
        title: 'Massachusetts',
        slug: 'massachusetts'
      },
      {
        title: 'Michigan',
        slug: 'michigan'
      },
      {
        title: 'Nevada',
        slug: 'nevada'
      },
      {
        title: 'New Jersey',
        slug: 'new-jersey'
      },
      {
        title: 'Ohio',
        slug: 'ohio'
      },
      {
        title: 'Pennsylvania',
        slug: 'pennsylvania'
      },
      {
        title: 'West Virginia',
        slug: 'west-virginia'
      }
    ],
    menuPreferenceStates: ['arizona', 'illinois', 'massachusetts', 'nevada'],
    statesWithAgeLimit21: [
      'arizona',
      'illinois',
      'massachusetts',
      'nevada',
      'new-jersey',
      'pennsylvania',
      'michigan',
      'west-virginia',
      'maryland',
      'ohio',
      'connecticut',
      'other'
    ],
    statesWithAgeLimit18: [],
    statesWithDelivery: [
      /*'nevada',*/
      /*'new-jersey'*/
    ],
    statesWithDeliveryContent: [
      /* {
        slug: 'nevada',
        areaSummary: 'Available in Carson City, Las Vegas, Reno, and select surrounding areas.',
        url: '/delivery/nevada'
      },
      */
      {
        slug: 'new-jersey',
        areaSummary: 'Available in Elizabeth, Lawrence, Neptune, and select surrounding areas.',
        url: '/delivery/new-jersey'
      }
    ],
    sweedStates: ['west-virginia', 'pennsylvania', 'arizona', 'nevada'],
    medicalMenuSweedStates: ['west-virginia', 'pennsylvania'],
    sweedStoreId: 184, // Used for global Query for Sweed Store Delivery Zones
    statesWithSpecialDiscount: [
      {
        slug: 'new-jersey',
        klaviyoListId: 'VgZRKZ',
        klaviyoPopupId: 'TFNrgg',
        percentage: 25,
        title: '25% OFF\nFeatured Brands',
        description: 'Sign up for Zen Leaf Emails for dispensary updates, discounts and new product updates delivered right to your inbox!'
      },
      {
        slug: 'maryland',
        klaviyoListId: 'Ykf8N6',
        klaviyoPopupId: 'XZ4Fg5',
        percentage: 10,
        title: '10% OFF\nFeatured Brands',
        description: 'Sign up for Zen Leaf Emails for dispensary updates, discounts and new product updates delivered right to your inbox!'
      },
      {
        slug: 'connecticut',
        klaviyoListId: 'QNvMjJ',
        klaviyoPopupId: 'R2tu9v',
        percentage: 25,
        title: '25% OFF\nCTPharma Products',
        description: 'Sign up for Zen Leaf Emails for dispensary updates, discounts and new product updates delivered right to your inbox!'
      },
      {
        slug: 'illinois',
        klaviyoListId: 'S7i8ww',
        klaviyoPopupId: 'TMTREi',
        percentage: 25,
        title: '25% OFF\nFeatured Brands',
        description: 'Sign up for Zen Leaf Emails for dispensary updates, discounts and new product updates delivered right to your inbox!'
      },
      {
        slug: 'michigan',
        klaviyoListId: 'YmuQEf',
        klaviyoPopupId: 'Tbb9kG',
        percentage: 15,
        title: '15% OFF\nEntire Purchase',
        description: 'Sign up for Zen Leaf Emails for dispensary updates, discounts and new product updates delivered right to your inbox!'
      },
      {
        slug: 'massachusetts',
        klaviyoListId: 'X83Ztm',
        klaviyoPopupId: 'XhbCbz',
        title: '20% OFF\nFeatured Brands',
        description: `Sign up for Zen Leaf Emails for dispensary updates, discounts and new product updates delivered right to your inbox!`
      }
    ]
  }
}

module.exports = {
  CURRENT_GEO_STATE,
  CURRENT_BRAND,
  GOOGLE_ANALYTICS_ID,
  GOOGLE_ANALYTICS_4_ID,
  GOOGLE_TAG_MANAGER_ID,
  RECAPCHA_SITE_KEY,
  GEOSTATE,
  BRAND,
  STORE_URL: STORE_URL[CURRENT_BRAND],
  API_URL,
  BRAND_DATA: BRAND_DATA[CURRENT_BRAND],
  KLAVIYO_KEY,
  KLAVIYO_COMPANY_ID,
  KLAVIYO_MARYLAND_FORM_LIST_ID,
  MONDAY_API_KEY,
  MAPBOX_ACCESS_TOKEN,
  PURGE_CACHE_WEBHOOK,
  DEFAULT_MAPBOX_ACCESS_TOKEN, // this will not be exposed to users as its being used by api
  CLEAN_REBUILD_WEBHOOK,
  MANIFEST_START_URL,
  APP_URLS,
  APP_IMAGES
}
