export const CURRENT_GEO_STATE = 'usa'
export const CURRENT_BRAND = 'ZLD'

export const GEOSTATE = {
  FLORIDA: 'florida',
  USA: 'usa'
}

export const BRAND = {
  ZLD: 'ZLD'
} 

export const STORE_URL = {
  ZLD: 'https://zenleafdispensaries.com'
}

export const APP_URLS = {
  [BRAND.ZLD]: 'https://apps.apple.com/us/app/zen-leaf/id6448922214',
}

export const APP_IMAGES = {
  [BRAND.ZLD]: {
    ios: 'https://admin.zenleafdispensaries.com/wp-content/uploads/2024/09/ios-app-button.svg',
    android: 'https://admin.zenleafdispensaries.com/wp-content/uploads/2024/09/android-app-button.svg'
  }
}

// export const API_URL = process.env.VERCEL_ENV === 'development' ? 'http://localhost:3000/' : process.env.NEXTAUTH_URL

export const BRAND_DATA = {
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
