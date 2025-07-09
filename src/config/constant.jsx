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
    ],
    allLocations:[
      {
          "__typename": "Location_Nap",
          "post_id": 419,
          "locationId": "PA008",
          "slug": "abington",
          "post_title": "Abington",
          "permalink": "https://admin.zenleafdispensaries.com/locations/abington/",
          "title": "Abington",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=144",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/Abington-Thumbnail-1.jpg",
                  "altText": "Medical Marijuana Dispensary Abington"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 782,
              "medical_store_id": 782,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA008",
              "address_1": "1752 Old York Rd",
              "address_2": null,
              "city": "Abington",
              "zip": "19001",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.13358822259026",
              "lng": "-75.11613467299966"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "5:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.13358822259026",
              "lng": "-75.11613467299966"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/Abington-Thumbnail-1.jpg",
              "slug": "Medical Marijuana Dispensary Abington"
          },
          "medicalStoreId": 782,
          "medical_store_id": 782,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "1752 Old York Rd",
          "address_2": null,
          "city": "Abington",
          "zip": "19001",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.13358822259026",
          "lng": "-75.11613467299966"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 191,
          "locationId": "PA004",
          "slug": "altoona",
          "post_title": "Altoona",
          "permalink": "https://admin.zenleafdispensaries.com/locations/altoona/",
          "title": "Altoona",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=191",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/altoona-300x2041-1.jpg",
                  "altText": "Altoona Zen Leaf"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 2436,
              "medical_store_id": 2436,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": 11,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA004",
              "address_1": "590 W Plank Road",
              "address_2": null,
              "city": "Altoona",
              "zip": "16602",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.468967",
              "lng": "-78.407395"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.468967",
              "lng": "-78.407395"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/altoona-300x2041-1.jpg",
              "slug": "Altoona Zen Leaf"
          },
          "medicalStoreId": 2436,
          "medical_store_id": 2436,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": 11,
          "storePlatform": "Sweed",
          "address_1": "590 W Plank Road",
          "address_2": null,
          "city": "Altoona",
          "zip": "16602",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.468967",
          "lng": "-78.407395"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 98727,
          "locationId": null,
          "slug": "antwerp",
          "post_title": "Antwerp",
          "permalink": "https://admin.zenleafdispensaries.com/locations/antwerp/",
          "title": "Antwerp",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=98727",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 6268,
              "medical_store_id": 6268,
              "recreational_store_id": 6269,
              "recreationalStoreId": 6269,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": null,
              "address_1": "503 W River Rd",
              "address_2": null,
              "city": "Antwerp",
              "zip": "45813",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3Mg==",
                  "post_title": "Ohio",
                  "slug": "ohio",
                  "abbr": "OH"
              },
              "lat": "41.17908327032872",
              "lng": "-84.74738345117805"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": null,
                  "open": null,
                  "closedB": true
              }
          },
          "_geoloc": {
              "lat": "41.17908327032872",
              "lng": "-84.74738345117805"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
              "slug": null
          },
          "medicalStoreId": 6268,
          "medical_store_id": 6268,
          "recreational_store_id": 6269,
          "recreationalStoreId": 6269,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "503 W River Rd",
          "address_2": null,
          "city": "Antwerp",
          "zip": "45813",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3Mg==",
              "post_title": "Ohio",
              "slug": "ohio",
              "abbr": "OH"
          },
          "lat": "41.17908327032872",
          "lng": "-84.74738345117805"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 98098,
          "locationId": null,
          "slug": "arcadia",
          "post_title": "Arcadia",
          "permalink": "https://admin.zenleafdispensaries.com/locations/arcadia/",
          "title": "Arcadia",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=98098",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2024/09/1IMG_2490-1-scaled.jpg",
                  "altText": "zen leaf arcadia"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 12,
              "medical_store_id": 12,
              "recreational_store_id": 12,
              "recreationalStoreId": 12,
              "sweed_embed_url": "zz",
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": null,
              "address_1": "2710 E Indian School Rd.",
              "address_2": null,
              "city": "Phoenix",
              "zip": "85016",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0MA==",
                  "post_title": "Arizona",
                  "slug": "arizona",
                  "abbr": "AZ"
              },
              "lat": "33.49557216798563",
              "lng": "-112.02297714564811"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Shiprock",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "33.49557216798563",
              "lng": "-112.02297714564811"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2024/09/1IMG_2490-1-scaled.jpg",
              "slug": "zen leaf arcadia"
          },
          "medicalStoreId": 12,
          "medical_store_id": 12,
          "recreational_store_id": 12,
          "recreationalStoreId": 12,
          "sweed_embed_url": "zz",
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "2710 E Indian School Rd.",
          "address_2": null,
          "city": "Phoenix",
          "zip": "85016",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0MA==",
              "post_title": "Arizona",
              "slug": "arizona",
              "abbr": "AZ"
          },
          "lat": "33.49557216798563",
          "lng": "-112.02297714564811"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 99588,
          "locationId": null,
          "slug": "ashford",
          "post_title": "Ashford",
          "permalink": "https://admin.zenleafdispensaries.com/locations/ashford/",
          "title": "Ashford",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=99588",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/ashford_zenleaf-4.jpg",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 6405,
              "medical_store_id": 6405,
              "recreational_store_id": 6403,
              "recreationalStoreId": 6403,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": null,
              "address_1": "55 Nott Hwy",
              "address_2": null,
              "city": "Ashford",
              "zip": "06278",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0NA==",
                  "post_title": "Connecticut",
                  "slug": "connecticut",
                  "abbr": "CT"
              },
              "lat": "41.85910659775425",
              "lng": "-72.18253663605662"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.85910659775425",
              "lng": "-72.18253663605662"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/ashford_zenleaf-4.jpg",
              "slug": null
          },
          "medicalStoreId": 6405,
          "medical_store_id": 6405,
          "recreational_store_id": 6403,
          "recreationalStoreId": 6403,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "55 Nott Hwy",
          "address_2": null,
          "city": "Ashford",
          "zip": "06278",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0NA==",
              "post_title": "Connecticut",
              "slug": "connecticut",
              "abbr": "CT"
          },
          "lat": "41.85910659775425",
          "lng": "-72.18253663605662"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 193,
          "locationId": "IL003",
          "slug": "aurora",
          "post_title": "Aurora",
          "permalink": "https://admin.zenleafdispensaries.com/locations/aurora/",
          "title": "Aurora",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=193",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/aurora-300x2041-1.jpg",
                  "altText": "Aurora Zen Leaf"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": null,
              "medical_store_id": null,
              "recreational_store_id": 2195,
              "recreationalStoreId": 2195,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "IL003",
              "address_1": "740 IL Rte 59",
              "address_2": null,
              "city": "Aurora",
              "zip": "60504",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1MA==",
                  "post_title": "Illinois",
                  "slug": "illinois",
                  "abbr": "IL"
              },
              "lat": "41.752410",
              "lng": "-88.206120"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Chicago",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.752410",
              "lng": "-88.206120"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/aurora-300x2041-1.jpg",
              "slug": "Aurora Zen Leaf"
          },
          "medicalStoreId": null,
          "medical_store_id": null,
          "recreational_store_id": 2195,
          "recreationalStoreId": 2195,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "740 IL Rte 59",
          "address_2": null,
          "city": "Aurora",
          "zip": "60504",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1MA==",
              "post_title": "Illinois",
              "slug": "illinois",
              "abbr": "IL"
          },
          "lat": "41.752410",
          "lng": "-88.206120"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 187,
          "locationId": "OH004",
          "slug": "bowling-green",
          "post_title": "Bowling Green",
          "permalink": "https://admin.zenleafdispensaries.com/locations/bowling-green/",
          "title": "Bowling Green",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=187",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/bowling-green-300x2041-1.jpg",
                  "altText": "Bowling Green Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 2815,
              "medical_store_id": 2815,
              "recreational_store_id": 6097,
              "recreationalStoreId": 6097,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "OH004",
              "address_1": "1155 N Main St.",
              "address_2": null,
              "city": "Bowling Green",
              "zip": "43402",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3Mg==",
                  "post_title": "Ohio",
                  "slug": "ohio",
                  "abbr": "OH"
              },
              "lat": "41.393552",
              "lng": "-83.651177"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.393552",
              "lng": "-83.651177"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/bowling-green-300x2041-1.jpg",
              "slug": "Bowling Green Zen Leaf Dispensary"
          },
          "medicalStoreId": 2815,
          "medical_store_id": 2815,
          "recreational_store_id": 6097,
          "recreationalStoreId": 6097,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "1155 N Main St.",
          "address_2": null,
          "city": "Bowling Green",
          "zip": "43402",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3Mg==",
              "post_title": "Ohio",
              "slug": "ohio",
              "abbr": "OH"
          },
          "lat": "41.393552",
          "lng": "-83.651177"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 189,
          "locationId": "MI001",
          "slug": "buchanan",
          "post_title": "Buchanan",
          "permalink": "https://admin.zenleafdispensaries.com/locations/buchanan/",
          "title": "Buchanan",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=189",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/2023_ZL_MI_Buchanan_Store-Photo.jpg",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1844,
              "medical_store_id": 1844,
              "recreational_store_id": 1845,
              "recreationalStoreId": 1845,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "MI001",
              "address_1": "259 East Front Street",
              "address_2": null,
              "city": "Buchanan",
              "zip": "49107",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1OQ==",
                  "post_title": "Michigan",
                  "slug": "michigan",
                  "abbr": "MI"
              },
              "lat": "41.827503",
              "lng": "-86.358882"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.827503",
              "lng": "-86.358882"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/2023_ZL_MI_Buchanan_Store-Photo.jpg",
              "slug": null
          },
          "medicalStoreId": 1844,
          "medical_store_id": 1844,
          "recreational_store_id": 1845,
          "recreationalStoreId": 1845,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "259 East Front Street",
          "address_2": null,
          "city": "Buchanan",
          "zip": "49107",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1OQ==",
              "post_title": "Michigan",
              "slug": "michigan",
              "abbr": "MI"
          },
          "lat": "41.827503",
          "lng": "-86.358882"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 20434,
          "locationId": "WV005",
          "slug": "buckhannon",
          "post_title": "Buckhannon",
          "permalink": "https://admin.zenleafdispensaries.com/locations/buckhannon/",
          "title": "Buckhannon",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=20434",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1,
              "medical_store_id": 1,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "WV005",
              "address_1": "120 Buckhannon Crossroads",
              "address_2": null,
              "city": "Buckhannon",
              "zip": "26201",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo4NQ==",
                  "post_title": "West Virginia",
                  "slug": "west-virginia",
                  "abbr": "WV"
              },
              "lat": "38.997766934000225",
              "lng": "-80.2373104464218"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "5:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "5:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "38.997766934000225",
              "lng": "-80.2373104464218"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
              "slug": null
          },
          "medicalStoreId": 1,
          "medical_store_id": 1,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "120 Buckhannon Crossroads",
          "address_2": null,
          "city": "Buckhannon",
          "zip": "26201",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo4NQ==",
              "post_title": "West Virginia",
              "slug": "west-virginia",
              "abbr": "WV"
          },
          "lat": "38.997766934000225",
          "lng": "-80.2373104464218"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 185,
          "locationId": "OH002",
          "slug": "canton",
          "post_title": "Canton",
          "permalink": "https://admin.zenleafdispensaries.com/locations/canton/",
          "title": "Canton",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=185",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/06/2023_Zen-Leaf-Dispensary-Canton_Exterior-1.jpg",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1897,
              "medical_store_id": 1897,
              "recreational_store_id": 6101,
              "recreationalStoreId": 6101,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "OH002",
              "address_1": "3224 Cleveland Avenue NW",
              "address_2": null,
              "city": "Canton",
              "zip": "44709",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3Mg==",
                  "post_title": "Ohio",
                  "slug": "ohio",
                  "abbr": "OH"
              },
              "lat": "40.834129",
              "lng": "-81.388252"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.834129",
              "lng": "-81.388252"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/06/2023_Zen-Leaf-Dispensary-Canton_Exterior-1.jpg",
              "slug": null
          },
          "medicalStoreId": 1897,
          "medical_store_id": 1897,
          "recreational_store_id": 6101,
          "recreationalStoreId": 6101,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "3224 Cleveland Avenue NW",
          "address_2": null,
          "city": "Canton",
          "zip": "44709",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3Mg==",
              "post_title": "Ohio",
              "slug": "ohio",
              "abbr": "OH"
          },
          "lat": "40.834129",
          "lng": "-81.388252"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 17867,
          "locationId": "NV004",
          "slug": "carson-city",
          "post_title": "Carson City",
          "permalink": "https://admin.zenleafdispensaries.com/locations/carson-city/",
          "title": "Carson City",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=17867",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/09/carson-city-about.jpg",
                  "altText": "Carson City Zen Leaf"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 5309,
              "medical_store_id": 5309,
              "recreational_store_id": 777,
              "recreationalStoreId": 777,
              "sweed_embed_url": "1",
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "NV004",
              "address_1": "2765 US-50 A",
              "address_2": null,
              "city": "Carson City",
              "zip": "89701",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo2NQ==",
                  "post_title": "Nevada",
                  "slug": "nevada",
                  "abbr": "NV"
              },
              "lat": "39.17558961125775",
              "lng": "-119.73694411742088"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Los_Angeles",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "8:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.17558961125775",
              "lng": "-119.73694411742088"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/09/carson-city-about.jpg",
              "slug": "Carson City Zen Leaf"
          },
          "medicalStoreId": 5309,
          "medical_store_id": 5309,
          "recreational_store_id": 777,
          "recreationalStoreId": 777,
          "sweed_embed_url": "1",
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "2765 US-50 A",
          "address_2": null,
          "city": "Carson City",
          "zip": "89701",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo2NQ==",
              "post_title": "Nevada",
              "slug": "nevada",
              "abbr": "NV"
          },
          "lat": "39.17558961125775",
          "lng": "-119.73694411742088"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 411,
          "locationId": "AZ003",
          "slug": "chandler",
          "post_title": "Chandler",
          "permalink": "https://admin.zenleafdispensaries.com/locations/chandler/",
          "title": "Chandler",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=127",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/chandler-300x2041-1.jpg",
                  "altText": "Chandler"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1413,
              "medical_store_id": 1413,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "AZ003",
              "address_1": "7200 W Chandler Blvd Ste 7",
              "address_2": null,
              "city": "Chandler",
              "zip": "85226",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0MA==",
                  "post_title": "Arizona",
                  "slug": "arizona",
                  "abbr": "AZ"
              },
              "lat": "33.306081",
              "lng": "-111.966286"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Shiprock",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "33.306081",
              "lng": "-111.966286"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/chandler-300x2041-1.jpg",
              "slug": "Chandler"
          },
          "medicalStoreId": 1413,
          "medical_store_id": 1413,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "7200 W Chandler Blvd Ste 7",
          "address_2": null,
          "city": "Chandler",
          "zip": "85226",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0MA==",
              "post_title": "Arizona",
              "slug": "arizona",
              "abbr": "AZ"
          },
          "lat": "33.306081",
          "lng": "-111.966286"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 399,
          "locationId": "IL010",
          "slug": "chicago-pilsen",
          "post_title": "Chicago (Pilsen)",
          "permalink": "https://admin.zenleafdispensaries.com/locations/chicago-pilsen/",
          "title": "Chicago (Pilsen)",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=87",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/02/2022_Zen-Leaf_Pilsen-1-800x5591-1.jpg",
                  "altText": "Zen Leaf Chicago (Pilsen)"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 709,
              "medical_store_id": 709,
              "recreational_store_id": 1498,
              "recreationalStoreId": 1498,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "IL010",
              "address_1": "1301 S Western Ave",
              "address_2": null,
              "city": "Chicago",
              "zip": "60608",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1MA==",
                  "post_title": "Illinois",
                  "slug": "illinois",
                  "abbr": "IL"
              },
              "lat": "41.864525",
              "lng": "-87.68566"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Chicago",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.864525",
              "lng": "-87.68566"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/02/2022_Zen-Leaf_Pilsen-1-800x5591-1.jpg",
              "slug": "Zen Leaf Chicago (Pilsen)"
          },
          "medicalStoreId": 709,
          "medical_store_id": 709,
          "recreational_store_id": 1498,
          "recreationalStoreId": 1498,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "1301 S Western Ave",
          "address_2": null,
          "city": "Chicago",
          "zip": "60608",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1MA==",
              "post_title": "Illinois",
              "slug": "illinois",
              "abbr": "IL"
          },
          "lat": "41.864525",
          "lng": "-87.68566"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 658,
          "locationId": "IL011",
          "slug": "chicago-rogers-park",
          "post_title": "Chicago (Rogers Park)",
          "permalink": "https://admin.zenleafdispensaries.com/locations/chicago-rogers-park/",
          "title": "Chicago (Rogers Park)",
          "guid": "https://admin.zenleafdispensaries.com/?post_type=location&#038;p=658",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/04/small_Zen-Leaf-Dispensary-in-Rogers-Park-Illinois-Storefront.jpg",
                  "altText": "Chicago (Rogers Park) Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 3026,
              "medical_store_id": 3026,
              "recreational_store_id": 3037,
              "recreationalStoreId": 3037,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "IL011",
              "address_1": "7305 N Rogers Ave",
              "address_2": null,
              "city": "Chicago",
              "zip": "60626",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1MA==",
                  "post_title": "Illinois",
                  "slug": "illinois",
                  "abbr": "IL"
              },
              "lat": "42.013863",
              "lng": "-87.679404"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Chicago",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "42.013863",
              "lng": "-87.679404"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/04/small_Zen-Leaf-Dispensary-in-Rogers-Park-Illinois-Storefront.jpg",
              "slug": "Chicago (Rogers Park) Zen Leaf Dispensary"
          },
          "medicalStoreId": 3026,
          "medical_store_id": 3026,
          "recreational_store_id": 3037,
          "recreationalStoreId": 3037,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "7305 N Rogers Ave",
          "address_2": null,
          "city": "Chicago",
          "zip": "60626",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1MA==",
              "post_title": "Illinois",
              "slug": "illinois",
              "abbr": "IL"
          },
          "lat": "42.013863",
          "lng": "-87.679404"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 179,
          "locationId": "IL009",
          "slug": "chicago-west-loop",
          "post_title": "Chicago (West Loop)",
          "permalink": "https://admin.zenleafdispensaries.com/locations/chicago-west-loop/",
          "title": "Chicago (West Loop)",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=179",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/chicago-west-loop-300x2041-1.jpg",
                  "altText": "Chicago West Loop Zen Leaf"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": null,
              "medical_store_id": null,
              "recreational_store_id": 2940,
              "recreationalStoreId": 2940,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "IL009",
              "address_1": "222 S Halsted Street",
              "address_2": null,
              "city": "Chicago",
              "zip": "60661",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1MA==",
                  "post_title": "Illinois",
                  "slug": "illinois",
                  "abbr": "IL"
              },
              "lat": "41.878490",
              "lng": "-87.647620"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Chicago",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.878490",
              "lng": "-87.647620"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/chicago-west-loop-300x2041-1.jpg",
              "slug": "Chicago West Loop Zen Leaf"
          },
          "medicalStoreId": null,
          "medical_store_id": null,
          "recreational_store_id": 2940,
          "recreationalStoreId": 2940,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "iHeartJane",
          "address_1": "222 S Halsted Street",
          "address_2": null,
          "city": "Chicago",
          "zip": "60661",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1MA==",
              "post_title": "Illinois",
              "slug": "illinois",
              "abbr": "IL"
          },
          "lat": "41.878490",
          "lng": "-87.647620"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 562,
          "locationId": "OH003",
          "slug": "cincinnati",
          "post_title": "Cincinnati",
          "permalink": "https://admin.zenleafdispensaries.com/locations/cincinnati/",
          "title": "Cincinnati",
          "guid": "https://admin.zenleafdispensaries.com/?post_type=location&#038;p=562",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1895,
              "medical_store_id": 1895,
              "recreational_store_id": 6100,
              "recreationalStoreId": 6100,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "OH003",
              "address_1": "8420 Vine St",
              "address_2": null,
              "city": "Cincinnati",
              "zip": "45216",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3Mg==",
                  "post_title": "Ohio",
                  "slug": "ohio",
                  "abbr": "OH"
              },
              "lat": "39.21632109062307",
              "lng": "-84.473426457722"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.21632109062307",
              "lng": "-84.473426457722"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
              "slug": null
          },
          "medicalStoreId": 1895,
          "medical_store_id": 1895,
          "recreational_store_id": 6100,
          "recreationalStoreId": 6100,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "8420 Vine St",
          "address_2": null,
          "city": "Cincinnati",
          "zip": "45216",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3Mg==",
              "post_title": "Ohio",
              "slug": "ohio",
              "abbr": "OH"
          },
          "lat": "39.21632109062307",
          "lng": "-84.473426457722"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 17744,
          "locationId": "WV004",
          "slug": "clarksburg",
          "post_title": "Clarksburg",
          "permalink": "https://admin.zenleafdispensaries.com/locations/clarksburg/",
          "title": "Clarksburg",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=17744",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/08/small_Zen-Leaf-Clarksburg-West-Virginia-Store-Photo2.jpg",
                  "altText": "Clarksburg Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1,
              "medical_store_id": 1,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": "12313",
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "WV004",
              "address_1": "254 Emily Dr",
              "address_2": null,
              "city": "Clarksburg",
              "zip": "26301",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo4NQ==",
                  "post_title": "West Virginia",
                  "slug": "west-virginia",
                  "abbr": "WV"
              },
              "lat": "39.27470627683945",
              "lng": "-80.28347920182111"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "5:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "5:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.27470627683945",
              "lng": "-80.28347920182111"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/08/small_Zen-Leaf-Clarksburg-West-Virginia-Store-Photo2.jpg",
              "slug": "Clarksburg Zen Leaf Dispensary"
          },
          "medicalStoreId": 1,
          "medical_store_id": 1,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": "12313",
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "254 Emily Dr",
          "address_2": null,
          "city": "Clarksburg",
          "zip": "26301",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo4NQ==",
              "post_title": "West Virginia",
              "slug": "west-virginia",
              "abbr": "WV"
          },
          "lat": "39.27470627683945",
          "lng": "-80.28347920182111"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 19309,
          "locationId": "PA019",
          "slug": "clifton-heights",
          "post_title": "Clifton Heights",
          "permalink": "https://admin.zenleafdispensaries.com/locations/clifton-heights/",
          "title": "Clifton Heights",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=19309",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/02/ZL_Clifton_Heights_1-scaled.jpg",
                  "altText": "Clifton Heights Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 5099,
              "medical_store_id": 5099,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA019",
              "address_1": "5321 W Baltimore Pike",
              "address_2": null,
              "city": "Clifton Heights",
              "zip": "19018",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "39.9256207525002",
              "lng": "-75.30972258997836"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.9256207525002",
              "lng": "-75.30972258997836"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/02/ZL_Clifton_Heights_1-scaled.jpg",
              "slug": "Clifton Heights Zen Leaf Dispensary"
          },
          "medicalStoreId": 5099,
          "medical_store_id": 5099,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "5321 W Baltimore Pike",
          "address_2": null,
          "city": "Clifton Heights",
          "zip": "19018",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "39.9256207525002",
          "lng": "-75.30972258997836"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 413,
          "locationId": "PA011",
          "slug": "cranberry",
          "post_title": "Cranberry Factory Store",
          "permalink": "https://admin.zenleafdispensaries.com/locations/cranberry/",
          "title": "Cranberry Factory Store",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=131",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/2022-Zen-Leaf-Cranberry-Township-Exterior-1.png",
                  "altText": "Zen Leaf Cranberry"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 4081,
              "medical_store_id": 4081,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA011",
              "address_1": "270 Executive Dr.",
              "address_2": null,
              "city": "Cranberry Twp",
              "zip": "16066",
              "shortTitle": "Cranberry Factory Store",
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.691619",
              "lng": "-80.110334"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "5:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "11:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "4:00 PM",
                  "open": "10:00 AM",
                  "closedB": true
              }
          },
          "_geoloc": {
              "lat": "40.691619",
              "lng": "-80.110334"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/2022-Zen-Leaf-Cranberry-Township-Exterior-1.png",
              "slug": "Zen Leaf Cranberry"
          },
          "medicalStoreId": 4081,
          "medical_store_id": 4081,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "270 Executive Dr.",
          "address_2": null,
          "city": "Cranberry Twp",
          "zip": "16066",
          "shortTitle": "Cranberry Factory Store",
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.691619",
          "lng": "-80.110334"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 569,
          "locationId": "OH005",
          "slug": "dayton",
          "post_title": "Dayton (Riverside)",
          "permalink": "https://admin.zenleafdispensaries.com/locations/dayton/",
          "title": "Dayton (Riverside)",
          "guid": "https://admin.zenleafdispensaries.com/?post_type=location&#038;p=569",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/03/2023-Zen-Leaf-Dispensar-Dayton-Exterior.png",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 3682,
              "medical_store_id": 3682,
              "recreational_store_id": 6099,
              "recreationalStoreId": 6099,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "OH005",
              "address_1": "5604 Airway Rd",
              "address_2": null,
              "city": "Riverside",
              "zip": "45431",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3Mg==",
                  "post_title": "Ohio",
                  "slug": "ohio",
                  "abbr": "OH"
              },
              "lat": "39.770758",
              "lng": "-84.106042"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.770758",
              "lng": "-84.106042"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/03/2023-Zen-Leaf-Dispensar-Dayton-Exterior.png",
              "slug": null
          },
          "medicalStoreId": 3682,
          "medical_store_id": 3682,
          "recreational_store_id": 6099,
          "recreationalStoreId": 6099,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "5604 Airway Rd",
          "address_2": null,
          "city": "Riverside",
          "zip": "45431",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3Mg==",
              "post_title": "Ohio",
              "slug": "ohio",
              "abbr": "OH"
          },
          "lat": "39.770758",
          "lng": "-84.106042"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 183,
          "locationId": "NJ002",
          "slug": "elizabeth",
          "post_title": "Elizabeth",
          "permalink": "https://admin.zenleafdispensaries.com/locations/elizabeth/",
          "title": "Elizabeth",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=183",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/elizabeth-300x2041-1.jpg",
                  "altText": "Elizabeth Zen Leaf"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1842,
              "medical_store_id": 1842,
              "recreational_store_id": 4443,
              "recreationalStoreId": 4443,
              "sweed_embed_url": "1",
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "NJ002",
              "address_1": "117 Spring St",
              "address_2": null,
              "city": "Elizabeth",
              "zip": "07201",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo2Nw==",
                  "post_title": "New Jersey",
                  "slug": "new-jersey",
                  "abbr": "NJ"
              },
              "lat": "40.662979",
              "lng": "-74.205643"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.662979",
              "lng": "-74.205643"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/elizabeth-300x2041-1.jpg",
              "slug": "Elizabeth Zen Leaf"
          },
          "medicalStoreId": 1842,
          "medical_store_id": 1842,
          "recreational_store_id": 4443,
          "recreationalStoreId": 4443,
          "sweed_embed_url": "1",
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "117 Spring St",
          "address_2": null,
          "city": "Elizabeth",
          "zip": "07201",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo2Nw==",
              "post_title": "New Jersey",
              "slug": "new-jersey",
              "abbr": "NJ"
          },
          "lat": "40.662979",
          "lng": "-74.205643"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 173,
          "locationId": "MD002",
          "slug": "elkridge",
          "post_title": "Elkridge",
          "permalink": "https://admin.zenleafdispensaries.com/locations/elkridge/",
          "title": "Elkridge",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=173",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/Zen-Leaf-Elkridge-Dispensary.jpg",
                  "altText": "Elkridge Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1883,
              "medical_store_id": 1883,
              "recreational_store_id": 5492,
              "recreationalStoreId": 5492,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "MD002",
              "address_1": "6000 Marshalee Dr",
              "address_2": null,
              "city": "Elkridge",
              "zip": "21075",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1Nw==",
                  "post_title": "Maryland",
                  "slug": "maryland",
                  "abbr": "MD"
              },
              "lat": "39.211469034973184",
              "lng": "-76.77813422034134"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.211469034973184",
              "lng": "-76.77813422034134"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/Zen-Leaf-Elkridge-Dispensary.jpg",
              "slug": "Elkridge Zen Leaf Dispensary"
          },
          "medicalStoreId": 1883,
          "medical_store_id": 1883,
          "recreational_store_id": 5492,
          "recreationalStoreId": 5492,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "6000 Marshalee Dr",
          "address_2": null,
          "city": "Elkridge",
          "zip": "21075",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1Nw==",
              "post_title": "Maryland",
              "slug": "maryland",
              "abbr": "MD"
          },
          "lat": "39.211469034973184",
          "lng": "-76.77813422034134"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 99589,
          "locationId": null,
          "slug": "enfield",
          "post_title": "Enfield",
          "permalink": "https://admin.zenleafdispensaries.com/locations/enfield/",
          "title": "Enfield",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=99589",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/ZL_EnfieldCT_04-1-scaled.jpg",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 6407,
              "medical_store_id": 6407,
              "recreational_store_id": 6409,
              "recreationalStoreId": 6409,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": null,
              "address_1": "98 Elm St",
              "address_2": null,
              "city": "Enfield",
              "zip": "06082",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0NA==",
                  "post_title": "Connecticut",
                  "slug": "connecticut",
                  "abbr": "CT"
              },
              "lat": "41.99747633349075",
              "lng": " -72.58257689999999"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.99747633349075",
              "lng": " -72.58257689999999"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/ZL_EnfieldCT_04-1-scaled.jpg",
              "slug": null
          },
          "medicalStoreId": 6407,
          "medical_store_id": 6407,
          "recreational_store_id": 6409,
          "recreationalStoreId": 6409,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "98 Elm St",
          "address_2": null,
          "city": "Enfield",
          "zip": "06082",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0NA==",
              "post_title": "Connecticut",
              "slug": "connecticut",
              "abbr": "CT"
          },
          "lat": "41.99747633349075",
          "lng": " -72.58257689999999"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 175,
          "locationId": "IL002",
          "slug": "evanston",
          "post_title": "Evanston",
          "permalink": "https://admin.zenleafdispensaries.com/locations/evanston/",
          "title": "Evanston",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=175",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/evanston-300x2041-1.jpg",
                  "altText": "Evanston Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 2047,
              "medical_store_id": 2047,
              "recreational_store_id": 2048,
              "recreationalStoreId": 2048,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "IL002",
              "address_1": "1804 Maple Ave",
              "address_2": null,
              "city": "Evanston",
              "zip": "60201",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1MA==",
                  "post_title": "Illinois",
                  "slug": "illinois",
                  "abbr": "IL"
              },
              "lat": "42.050165",
              "lng": "-87.685026"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Chicago",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "11:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "42.050165",
              "lng": "-87.685026"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/evanston-300x2041-1.jpg",
              "slug": "Evanston Zen Leaf Dispensary"
          },
          "medicalStoreId": 2047,
          "medical_store_id": 2047,
          "recreational_store_id": 2048,
          "recreationalStoreId": 2048,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "iHeartJane",
          "address_1": "1804 Maple Ave",
          "address_2": null,
          "city": "Evanston",
          "zip": "60201",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1MA==",
              "post_title": "Illinois",
              "slug": "illinois",
              "abbr": "IL"
          },
          "lat": "42.050165",
          "lng": "-87.685026"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 97999,
          "locationId": null,
          "slug": "fairless-hills",
          "post_title": "Fairless Hills Factory Store",
          "permalink": "https://admin.zenleafdispensaries.com/locations/fairless-hills/",
          "title": "Fairless Hills Factory Store",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=97999",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 3949,
              "medical_store_id": 3949,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": null,
              "address_1": "203 Lincoln Hwy.",
              "address_2": null,
              "city": "Fairless Hills",
              "zip": "19030",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.184948790769496",
              "lng": "-74.85660555767211"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.184948790769496",
              "lng": "-74.85660555767211"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
              "slug": null
          },
          "medicalStoreId": 3949,
          "medical_store_id": 3949,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "203 Lincoln Hwy.",
          "address_2": null,
          "city": "Fairless Hills",
          "zip": "19030",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.184948790769496",
          "lng": "-74.85660555767211"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 404,
          "locationId": "NV002",
          "slug": "flamingo",
          "post_title": "Flamingo",
          "permalink": "https://admin.zenleafdispensaries.com/locations/flamingo/",
          "title": "Flamingo",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=100",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/flamingo-300x2041-1.jpg",
                  "altText": "Flamingo Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 5848,
              "medical_store_id": 5848,
              "recreational_store_id": 3702,
              "recreationalStoreId": 3702,
              "sweed_embed_url": "x",
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "NV002",
              "address_1": "5940 W Flamingo Rd",
              "address_2": null,
              "city": "Las Vegas",
              "zip": "89103",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo2NQ==",
                  "post_title": "Nevada",
                  "slug": "nevada",
                  "abbr": "NV"
              },
              "lat": "36.114946",
              "lng": "-115.222494"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Los_Angeles",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "36.114946",
              "lng": "-115.222494"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/flamingo-300x2041-1.jpg",
              "slug": "Flamingo Zen Leaf Dispensary"
          },
          "medicalStoreId": 5848,
          "medical_store_id": 5848,
          "recreational_store_id": 3702,
          "recreationalStoreId": 3702,
          "sweed_embed_url": "x",
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "5940 W Flamingo Rd",
          "address_2": null,
          "city": "Las Vegas",
          "zip": "89103",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo2NQ==",
              "post_title": "Nevada",
              "slug": "nevada",
              "abbr": "NV"
          },
          "lat": "36.114946",
          "lng": "-115.222494"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 177,
          "locationId": "MD001",
          "slug": "germantown",
          "post_title": "Germantown",
          "permalink": "https://admin.zenleafdispensaries.com/locations/germantown/",
          "title": "Germantown",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=177",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/germantown-300x2041-1.jpg",
                  "altText": "Germantown"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1890,
              "medical_store_id": 1890,
              "recreational_store_id": 5489,
              "recreationalStoreId": 5489,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "MD001",
              "address_1": "13007 Wisteria Dr Unit 28-29",
              "address_2": null,
              "city": "Germantown",
              "zip": "20874",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1Nw==",
                  "post_title": "Maryland",
                  "slug": "maryland",
                  "abbr": "MD"
              },
              "lat": "39.178676",
              "lng": "-77.270405"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.178676",
              "lng": "-77.270405"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/germantown-300x2041-1.jpg",
              "slug": "Germantown"
          },
          "medicalStoreId": 1890,
          "medical_store_id": 1890,
          "recreational_store_id": 5489,
          "recreationalStoreId": 5489,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "13007 Wisteria Dr Unit 28-29",
          "address_2": null,
          "city": "Germantown",
          "zip": "20874",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1Nw==",
              "post_title": "Maryland",
              "slug": "maryland",
              "abbr": "MD"
          },
          "lat": "39.178676",
          "lng": "-77.270405"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 412,
          "locationId": "AZ004",
          "slug": "gilbert",
          "post_title": "Gilbert",
          "permalink": "https://admin.zenleafdispensaries.com/locations/gilbert/",
          "title": "Gilbert",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=129",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/gilbert-1-300x2041-1.jpg",
                  "altText": "Gilbert Zen Leaf"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": null,
              "medical_store_id": null,
              "recreational_store_id": 2753,
              "recreationalStoreId": 2753,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "AZ004",
              "address_1": "5409 S Power Rd",
              "address_2": null,
              "city": "Mesa",
              "zip": "85212",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0MA==",
                  "post_title": "Arizona",
                  "slug": "arizona",
                  "abbr": "AZ"
              },
              "lat": "33.317803",
              "lng": "-111.686107"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Shiprock",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "33.317803",
              "lng": "-111.686107"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/gilbert-1-300x2041-1.jpg",
              "slug": "Gilbert Zen Leaf"
          },
          "medicalStoreId": null,
          "medical_store_id": null,
          "recreational_store_id": 2753,
          "recreationalStoreId": 2753,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "5409 S Power Rd",
          "address_2": null,
          "city": "Mesa",
          "zip": "85212",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0MA==",
              "post_title": "Arizona",
              "slug": "arizona",
              "abbr": "AZ"
          },
          "lat": "33.317803",
          "lng": "-111.686107"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 169,
          "locationId": "PA001",
          "slug": "harrisburg",
          "post_title": "Harrisburg Factory Store",
          "permalink": "https://admin.zenleafdispensaries.com/locations/harrisburg/",
          "title": "Harrisburg Factory Store",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=169",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/harrisburg-300x2041-1.jpg",
                  "altText": "Harrisburg Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 2437,
              "medical_store_id": 2437,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA001",
              "address_1": "137 S 17th Street",
              "address_2": null,
              "city": "Harrisburg",
              "zip": "17104",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.265162",
              "lng": "-76.863671"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": true,
                      "closingTime": null,
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": null
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": true
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "5:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.265162",
              "lng": "-76.863671"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/harrisburg-300x2041-1.jpg",
              "slug": "Harrisburg Zen Leaf Dispensary"
          },
          "medicalStoreId": 2437,
          "medical_store_id": 2437,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "137 S 17th Street",
          "address_2": null,
          "city": "Harrisburg",
          "zip": "17104",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.265162",
          "lng": "-76.863671"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 171,
          "locationId": "IL006",
          "slug": "highland-park",
          "post_title": "Highland Park",
          "permalink": "https://admin.zenleafdispensaries.com/locations/highland-park/",
          "title": "Highland Park",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=171",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/Zen-Leaf-Highland-Park-Exterior-scaled.jpg",
                  "altText": "Zen Leaf Highland Park Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 2726,
              "medical_store_id": 2726,
              "recreational_store_id": 1815,
              "recreationalStoreId": 1815,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "IL006",
              "address_1": "2030 Skokie Valley Rd",
              "address_2": null,
              "city": "Highland Park",
              "zip": "60035",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1MA==",
                  "post_title": "Illinois",
                  "slug": "illinois",
                  "abbr": "IL"
              },
              "lat": "42.19050675809013",
              "lng": "-87.8273005085951"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Chicago",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "42.19050675809013",
              "lng": "-87.8273005085951"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/Zen-Leaf-Highland-Park-Exterior-scaled.jpg",
              "slug": "Zen Leaf Highland Park Dispensary"
          },
          "medicalStoreId": 2726,
          "medical_store_id": 2726,
          "recreational_store_id": 1815,
          "recreationalStoreId": 1815,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "2030 Skokie Valley Rd",
          "address_2": null,
          "city": "Highland Park",
          "zip": "60035",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1MA==",
              "post_title": "Illinois",
              "slug": "illinois",
              "abbr": "IL"
          },
          "lat": "42.19050675809013",
          "lng": "-87.8273005085951"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 165,
          "locationId": "NV001",
          "slug": "las-vegas",
          "post_title": "Las Vegas",
          "permalink": "https://admin.zenleafdispensaries.com/locations/las-vegas/",
          "title": "Las Vegas",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=165",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/las-vegas-300x2041-1.jpg",
                  "altText": "Las Vegas Zen Leaf Dispensaries"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1648,
              "medical_store_id": 1648,
              "recreational_store_id": 1641,
              "recreationalStoreId": 1641,
              "sweed_embed_url": "1",
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "NV001",
              "address_1": "9120 W Post Rd Suite 103",
              "address_2": null,
              "city": "Las Vegas",
              "zip": "89148",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo2NQ==",
                  "post_title": "Nevada",
                  "slug": "nevada",
                  "abbr": "NV"
              },
              "lat": "36.074568",
              "lng": "-115.291084"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Los_Angeles",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "36.074568",
              "lng": "-115.291084"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/las-vegas-300x2041-1.jpg",
              "slug": "Las Vegas Zen Leaf Dispensaries"
          },
          "medicalStoreId": 1648,
          "medical_store_id": 1648,
          "recreational_store_id": 1641,
          "recreationalStoreId": 1641,
          "sweed_embed_url": "1",
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "9120 W Post Rd Suite 103",
          "address_2": null,
          "city": "Las Vegas",
          "zip": "89148",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo2NQ==",
              "post_title": "Nevada",
              "slug": "nevada",
              "abbr": "NV"
          },
          "lat": "36.074568",
          "lng": "-115.291084"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 167,
          "locationId": "NJ003",
          "slug": "lawrence",
          "post_title": "Lawrence",
          "permalink": "https://admin.zenleafdispensaries.com/locations/lawrence/",
          "title": "Lawrence",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=167",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/lawrence-300x2041-1.jpg",
                  "altText": "Lawrence Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 3254,
              "medical_store_id": 3254,
              "recreational_store_id": 4441,
              "recreationalStoreId": 4441,
              "sweed_embed_url": "1",
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "NJ003",
              "address_1": "3256 Brunswick Pike",
              "address_2": null,
              "city": "Lawrence Township",
              "zip": "08648",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo2Nw==",
                  "post_title": "New Jersey",
                  "slug": "new-jersey",
                  "abbr": "NJ"
              },
              "lat": "40.290276",
              "lng": "-74.686855"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.290276",
              "lng": "-74.686855"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/lawrence-300x2041-1.jpg",
              "slug": "Lawrence Zen Leaf Dispensary"
          },
          "medicalStoreId": 3254,
          "medical_store_id": 3254,
          "recreational_store_id": 4441,
          "recreationalStoreId": 4441,
          "sweed_embed_url": "1",
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "3256 Brunswick Pike",
          "address_2": null,
          "city": "Lawrence Township",
          "zip": "08648",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo2Nw==",
              "post_title": "New Jersey",
              "slug": "new-jersey",
              "abbr": "NJ"
          },
          "lat": "40.290276",
          "lng": "-74.686855"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 426,
          "locationId": "IL008",
          "slug": "lombard",
          "post_title": "Lombard",
          "permalink": "https://admin.zenleafdispensaries.com/locations/lombard/",
          "title": "Lombard",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=159",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/lomboard-300x2041-1.jpg",
                  "altText": "Lombard Zen Leaf DIspensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": null,
              "medical_store_id": null,
              "recreational_store_id": 2804,
              "recreationalStoreId": 2804,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "IL008",
              "address_1": "783 Butterfield Rd",
              "address_2": null,
              "city": "Lombard",
              "zip": "60148",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1MA==",
                  "post_title": "Illinois",
                  "slug": "illinois",
                  "abbr": "IL"
              },
              "lat": "41.839617",
              "lng": "-87.997508"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Chicago",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.839617",
              "lng": "-87.997508"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/lomboard-300x2041-1.jpg",
              "slug": "Lombard Zen Leaf DIspensary"
          },
          "medicalStoreId": null,
          "medical_store_id": null,
          "recreational_store_id": 2804,
          "recreationalStoreId": 2804,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "iHeartJane",
          "address_1": "783 Butterfield Rd",
          "address_2": null,
          "city": "Lombard",
          "zip": "60148",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1MA==",
              "post_title": "Illinois",
              "slug": "illinois",
              "abbr": "IL"
          },
          "lat": "41.839617",
          "lng": "-87.997508"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 415,
          "locationId": "PA009",
          "slug": "malvern",
          "post_title": "Malvern",
          "permalink": "https://admin.zenleafdispensaries.com/locations/malvern/",
          "title": "Malvern",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=135",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 780,
              "medical_store_id": 780,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA009",
              "address_1": "249 Planebrook Rd.",
              "address_2": null,
              "city": "Malvern",
              "zip": "19355",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.036344",
              "lng": "-75.570654"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "5:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.036344",
              "lng": "-75.570654"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
              "slug": null
          },
          "medicalStoreId": 780,
          "medical_store_id": 780,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "Sweed",
          "address_1": "249 Planebrook Rd.",
          "address_2": null,
          "city": "Malvern",
          "zip": "19355",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.036344",
          "lng": "-75.570654"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 665,
          "locationId": "CT001",
          "slug": "meriden",
          "post_title": "Meriden",
          "permalink": "https://admin.zenleafdispensaries.com/locations/meriden/",
          "title": "Meriden",
          "guid": "https://admin.zenleafdispensaries.com/?post_type=location&#038;p=665",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/05/willow-brook-wellness.jpg",
                  "altText": "Willowbrook Wellness"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 4193,
              "medical_store_id": 4193,
              "recreational_store_id": 5020,
              "recreationalStoreId": 5020,
              "sweed_embed_url": null,
              "mapZoomOverride": 12,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "CT001",
              "address_1": "1371 E Main St",
              "address_2": "Ste 7",
              "city": "Meriden",
              "zip": "06450",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0NA==",
                  "post_title": "Connecticut",
                  "slug": "connecticut",
                  "abbr": "CT"
              },
              "lat": "41.525298",
              "lng": "-72.756919"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.525298",
              "lng": "-72.756919"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/05/willow-brook-wellness.jpg",
              "slug": "Willowbrook Wellness"
          },
          "medicalStoreId": 4193,
          "medical_store_id": 4193,
          "recreational_store_id": 5020,
          "recreationalStoreId": 5020,
          "sweed_embed_url": null,
          "mapZoomOverride": 12,
          "storePlatform": "iHeartJane",
          "address_1": "1371 E Main St",
          "address_2": "Ste 7",
          "city": "Meriden",
          "zip": "06450",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0NA==",
              "post_title": "Connecticut",
              "slug": "connecticut",
              "abbr": "CT"
          },
          "lat": "41.525298",
          "lng": "-72.756919"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 407,
          "locationId": "AZ005",
          "slug": "mesa",
          "post_title": "Mesa",
          "permalink": "https://admin.zenleafdispensaries.com/locations/mesa/",
          "title": "Mesa",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=119",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/mesa-300x2041-1.jpg",
                  "altText": "Mesa Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": null,
              "medical_store_id": null,
              "recreational_store_id": 2752,
              "recreationalStoreId": 2752,
              "sweed_embed_url": null,
              "mapZoomOverride": 11,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "AZ005",
              "address_1": "550 W McKellips Rd.",
              "address_2": null,
              "city": "Mesa",
              "zip": "85201",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0MA==",
                  "post_title": "Arizona",
                  "slug": "arizona",
                  "abbr": "AZ"
              },
              "lat": "33.451619",
              "lng": "-111.843281"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Shiprock",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "33.451619",
              "lng": "-111.843281"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/mesa-300x2041-1.jpg",
              "slug": "Mesa Zen Leaf Dispensary"
          },
          "medicalStoreId": null,
          "medical_store_id": null,
          "recreational_store_id": 2752,
          "recreationalStoreId": 2752,
          "sweed_embed_url": null,
          "mapZoomOverride": 11,
          "storePlatform": "Sweed",
          "address_1": "550 W McKellips Rd.",
          "address_2": null,
          "city": "Mesa",
          "zip": "85201",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0MA==",
              "post_title": "Arizona",
              "slug": "arizona",
              "abbr": "AZ"
          },
          "lat": "33.451619",
          "lng": "-111.843281"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 414,
          "locationId": "PA012",
          "slug": "monroeville",
          "post_title": "Monroeville",
          "permalink": "https://admin.zenleafdispensaries.com/locations/monroeville/",
          "title": "Monroeville",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=133",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/MicrosoftTeams-image-315.jpg",
                  "altText": "monroeville storefront"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 4083,
              "medical_store_id": 4083,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA012",
              "address_1": "130 Mall Cir Dr.",
              "address_2": null,
              "city": "Monroeville",
              "zip": "15146",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.4316334438703",
              "lng": "-79.7938776038855"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "11:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "4:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.4316334438703",
              "lng": "-79.7938776038855"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/MicrosoftTeams-image-315.jpg",
              "slug": "monroeville storefront"
          },
          "medicalStoreId": 4083,
          "medical_store_id": 4083,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "Sweed",
          "address_1": "130 Mall Cir Dr.",
          "address_2": null,
          "city": "Monroeville",
          "zip": "15146",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.4316334438703",
          "lng": "-79.7938776038855"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 402,
          "locationId": "WV001",
          "slug": "morgantown",
          "post_title": "Morgantown",
          "permalink": "https://admin.zenleafdispensaries.com/locations/morgantown/",
          "title": "Morgantown",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=96",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/morgantown.jpg",
                  "altText": "Morgantown"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1,
              "medical_store_id": 1,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": "2",
              "mapZoomOverride": 11,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "WV001",
              "address_1": "205 Venture Dr",
              "address_2": null,
              "city": "Morgantown",
              "zip": "26508",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo4NQ==",
                  "post_title": "West Virginia",
                  "slug": "west-virginia",
                  "abbr": "WV"
              },
              "lat": "39.648819",
              "lng": "-79.89887"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "5:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "5:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.648819",
              "lng": "-79.89887"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/morgantown.jpg",
              "slug": "Morgantown"
          },
          "medicalStoreId": 1,
          "medical_store_id": 1,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": "2",
          "mapZoomOverride": 11,
          "storePlatform": "Sweed",
          "address_1": "205 Venture Dr",
          "address_2": null,
          "city": "Morgantown",
          "zip": "26508",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo4NQ==",
              "post_title": "West Virginia",
              "slug": "west-virginia",
              "abbr": "WV"
          },
          "lat": "39.648819",
          "lng": "-79.89887"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 98564,
          "locationId": null,
          "slug": "mt-holly",
          "post_title": "Mt. Holly",
          "permalink": "https://admin.zenleafdispensaries.com/locations/mt-holly/",
          "title": "Mt. Holly",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=98564",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2024/11/Image-2024-12-19T114743.737-1-scaled.jpeg",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": null,
              "medical_store_id": null,
              "recreational_store_id": 6148,
              "recreationalStoreId": 6148,
              "sweed_embed_url": "1",
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": null,
              "address_1": "600 High St. ",
              "address_2": null,
              "city": "Mt. Holly",
              "zip": "08060",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo2Nw==",
                  "post_title": "New Jersey",
                  "slug": "new-jersey",
                  "abbr": "NJ"
              },
              "lat": "40.00725710406759",
              "lng": "-74.798217945342"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Los_Angeles",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.00725710406759",
              "lng": "-74.798217945342"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2024/11/Image-2024-12-19T114743.737-1-scaled.jpeg",
              "slug": null
          },
          "medicalStoreId": null,
          "medical_store_id": null,
          "recreational_store_id": 6148,
          "recreationalStoreId": 6148,
          "sweed_embed_url": "1",
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "600 High St. ",
          "address_2": null,
          "city": "Mt. Holly",
          "zip": "08060",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo2Nw==",
              "post_title": "New Jersey",
              "slug": "new-jersey",
              "abbr": "NJ"
          },
          "lat": "40.00725710406759",
          "lng": "-74.798217945342"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 161,
          "locationId": "IL005",
          "slug": "naperville",
          "post_title": "Naperville",
          "permalink": "https://admin.zenleafdispensaries.com/locations/naperville/",
          "title": "Naperville",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=161",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/naperville-300x2041-1.jpg",
                  "altText": "Naperville Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": null,
              "medical_store_id": null,
              "recreational_store_id": 2593,
              "recreationalStoreId": 2593,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "IL005",
              "address_1": "1516 N Naper Blvd",
              "address_2": null,
              "city": "Naperville",
              "zip": "60563",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1MA==",
                  "post_title": "Illinois",
                  "slug": "illinois",
                  "abbr": "IL"
              },
              "lat": "41.797403",
              "lng": "-88.118652"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Chicago",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.797403",
              "lng": "-88.118652"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/naperville-300x2041-1.jpg",
              "slug": "Naperville Zen Leaf Dispensary"
          },
          "medicalStoreId": null,
          "medical_store_id": null,
          "recreational_store_id": 2593,
          "recreationalStoreId": 2593,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "iHeartJane",
          "address_1": "1516 N Naper Blvd",
          "address_2": null,
          "city": "Naperville",
          "zip": "60563",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1MA==",
              "post_title": "Illinois",
              "slug": "illinois",
              "abbr": "IL"
          },
          "lat": "41.797403",
          "lng": "-88.118652"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 96783,
          "locationId": null,
          "slug": "naugatuck",
          "post_title": "Naugatuck",
          "permalink": "https://admin.zenleafdispensaries.com/locations/naugatuck/",
          "title": "Naugatuck",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=96783",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2024/02/Image-2024-11-11T113327.343.jpeg",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 5888,
              "medical_store_id": 5888,
              "recreational_store_id": 5887,
              "recreationalStoreId": 5887,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": null,
              "address_1": "585 S. Main St. Ste. 7",
              "address_2": null,
              "city": "Naugatuck",
              "zip": "06770",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0NA==",
                  "post_title": "Connecticut",
                  "slug": "connecticut",
                  "abbr": "CT"
              },
              "lat": "41.48083446113356",
              "lng": "-73.04804789935126"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.48083446113356",
              "lng": "-73.04804789935126"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2024/02/Image-2024-11-11T113327.343.jpeg",
              "slug": null
          },
          "medicalStoreId": 5888,
          "medical_store_id": 5888,
          "recreational_store_id": 5887,
          "recreationalStoreId": 5887,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "585 S. Main St. Ste. 7",
          "address_2": null,
          "city": "Naugatuck",
          "zip": "06770",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0NA==",
              "post_title": "Connecticut",
              "slug": "connecticut",
              "abbr": "CT"
          },
          "lat": "41.48083446113356",
          "lng": "-73.04804789935126"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 163,
          "locationId": "NJ001",
          "slug": "neptune",
          "post_title": "Neptune",
          "permalink": "https://admin.zenleafdispensaries.com/locations/neptune/",
          "title": "Neptune",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=163",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/neptune-300x2041-1.jpg",
                  "altText": "Neptune Zen Leaf Dispensaries"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 3016,
              "medical_store_id": 3016,
              "recreational_store_id": 4442,
              "recreationalStoreId": 4442,
              "sweed_embed_url": "1",
              "mapZoomOverride": 13,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "NJ001",
              "address_1": "2100 Route 66",
              "address_2": null,
              "city": "Neptune Township",
              "zip": "07753",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo2Nw==",
                  "post_title": "New Jersey",
                  "slug": "new-jersey",
                  "abbr": "NJ"
              },
              "lat": "40.226151",
              "lng": "-74.040615"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.226151",
              "lng": "-74.040615"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/neptune-300x2041-1.jpg",
              "slug": "Neptune Zen Leaf Dispensaries"
          },
          "medicalStoreId": 3016,
          "medical_store_id": 3016,
          "recreational_store_id": 4442,
          "recreationalStoreId": 4442,
          "sweed_embed_url": "1",
          "mapZoomOverride": 13,
          "storePlatform": "Sweed",
          "address_1": "2100 Route 66",
          "address_2": null,
          "city": "Neptune Township",
          "zip": "07753",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo2Nw==",
              "post_title": "New Jersey",
              "slug": "new-jersey",
              "abbr": "NJ"
          },
          "lat": "40.226151",
          "lng": "-74.040615"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 17853,
          "locationId": "PA018",
          "slug": "new-kensington",
          "post_title": "New Kensington (Pittsburgh)",
          "permalink": "https://admin.zenleafdispensaries.com/locations/new-kensington/",
          "title": "New Kensington (Pittsburgh)",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=17853",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/09/2022_Zen-Leaf_New-Kensington_Exterior_1-1-scaled.jpg",
                  "altText": "New Kensington Cannabis Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 4707,
              "medical_store_id": 4707,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA018",
              "address_1": "215 Tarentum Bridge Rd",
              "address_2": null,
              "city": "New Kensington",
              "zip": "15068",
              "shortTitle": "New Kensington",
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.591542",
              "lng": "-79.752101"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "6:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "4:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.591542",
              "lng": "-79.752101"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/09/2022_Zen-Leaf_New-Kensington_Exterior_1-1-scaled.jpg",
              "slug": "New Kensington Cannabis Dispensary"
          },
          "medicalStoreId": 4707,
          "medical_store_id": 4707,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "215 Tarentum Bridge Rd",
          "address_2": null,
          "city": "New Kensington",
          "zip": "15068",
          "shortTitle": "New Kensington",
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.591542",
          "lng": "-79.752101"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 563,
          "locationId": "OH001",
          "slug": "newark",
          "post_title": "Newark",
          "permalink": "https://admin.zenleafdispensaries.com/locations/newark/",
          "title": "Newark",
          "guid": "https://admin.zenleafdispensaries.com/?post_type=location&#038;p=563",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/03/2023_Zen-Leaf-Dispensary-Newark_Exterior.jpg",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1896,
              "medical_store_id": 1896,
              "recreational_store_id": 6095,
              "recreationalStoreId": 6095,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "OH001",
              "address_1": "1250 N 21st St.",
              "address_2": null,
              "city": "Newark",
              "zip": "43055",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3Mg==",
                  "post_title": "Ohio",
                  "slug": "ohio",
                  "abbr": "OH"
              },
              "lat": "40.08235",
              "lng": "-82.427355"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.08235",
              "lng": "-82.427355"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/03/2023_Zen-Leaf-Dispensary-Newark_Exterior.jpg",
              "slug": null
          },
          "medicalStoreId": 1896,
          "medical_store_id": 1896,
          "recreational_store_id": 6095,
          "recreationalStoreId": 6095,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "1250 N 21st St.",
          "address_2": null,
          "city": "Newark",
          "zip": "43055",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3Mg==",
              "post_title": "Ohio",
              "slug": "ohio",
              "abbr": "OH"
          },
          "lat": "40.08235",
          "lng": "-82.427355"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 23940,
          "locationId": "CT004",
          "slug": "newington",
          "post_title": "Newington",
          "permalink": "https://admin.zenleafdispensaries.com/locations/newington/",
          "title": "Newington",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=23940",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/09/ZL_CT_Newington_Ext_IMG_1669.jpg",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 5567,
              "medical_store_id": 5567,
              "recreational_store_id": 5568,
              "recreationalStoreId": 5568,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "CT004",
              "address_1": "2903 Berlin Turnpike",
              "address_2": null,
              "city": "Newington",
              "zip": "06111",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0NA==",
                  "post_title": "Connecticut",
                  "slug": "connecticut",
                  "abbr": "CT"
              },
              "lat": "41.671616708488",
              "lng": "-72.71807423738848"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.671616708488",
              "lng": "-72.71807423738848"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/09/ZL_CT_Newington_Ext_IMG_1669.jpg",
              "slug": null
          },
          "medicalStoreId": 5567,
          "medical_store_id": 5567,
          "recreational_store_id": 5568,
          "recreationalStoreId": 5568,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "2903 Berlin Turnpike",
          "address_2": null,
          "city": "Newington",
          "zip": "06111",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0NA==",
              "post_title": "Connecticut",
              "slug": "connecticut",
              "abbr": "CT"
          },
          "lat": "41.671616708488",
          "lng": "-72.71807423738848"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 96641,
          "locationId": null,
          "slug": "norristown",
          "post_title": "Norristown",
          "permalink": "https://admin.zenleafdispensaries.com/locations/norristown/",
          "title": "Norristown",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=96641",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2024/02/Zen-Leaf-Norristown-Exterior-4.jpg",
                  "altText": "Zen Leaf Norristown Exterior"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 4209,
              "medical_store_id": 4209,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": null,
              "address_1": "436 Egypt Rd.",
              "address_2": null,
              "city": "Norristown",
              "zip": "19403",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.13077263477558",
              "lng": "-75.40006617412786"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.13077263477558",
              "lng": "-75.40006617412786"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2024/02/Zen-Leaf-Norristown-Exterior-4.jpg",
              "slug": "Zen Leaf Norristown Exterior"
          },
          "medicalStoreId": 4209,
          "medical_store_id": 4209,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "436 Egypt Rd.",
          "address_2": null,
          "city": "Norristown",
          "zip": "19403",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.13077263477558",
          "lng": "-75.40006617412786"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 425,
          "locationId": "NV003",
          "slug": "north-las-vegas",
          "post_title": "North Las Vegas",
          "permalink": "https://admin.zenleafdispensaries.com/locations/north-las-vegas/",
          "title": "North Las Vegas",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=157",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/north-las-vegas-300x2041-1.jpg",
                  "altText": "North Las Vegas"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 5847,
              "medical_store_id": 5847,
              "recreational_store_id": 2747,
              "recreationalStoreId": 2747,
              "sweed_embed_url": "x",
              "mapZoomOverride": 11,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "NV003",
              "address_1": "4444 W Craig Road",
              "address_2": "Suite 100-104",
              "city": "North Las Vegas",
              "zip": "89032",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo2NQ==",
                  "post_title": "Nevada",
                  "slug": "nevada",
                  "abbr": "NV"
              },
              "lat": "36.239449",
              "lng": "-115.202142"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Los_Angeles",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "8:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "11:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "11:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "11:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "11:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "11:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "11:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "11:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "36.239449",
              "lng": "-115.202142"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/north-las-vegas-300x2041-1.jpg",
              "slug": "North Las Vegas"
          },
          "medicalStoreId": 5847,
          "medical_store_id": 5847,
          "recreational_store_id": 2747,
          "recreationalStoreId": 2747,
          "sweed_embed_url": "x",
          "mapZoomOverride": 11,
          "storePlatform": "Sweed",
          "address_1": "4444 W Craig Road",
          "address_2": "Suite 100-104",
          "city": "North Las Vegas",
          "zip": "89032",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo2NQ==",
              "post_title": "Nevada",
              "slug": "nevada",
              "abbr": "NV"
          },
          "lat": "36.239449",
          "lng": "-115.202142"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 22963,
          "locationId": "CT003",
          "slug": "norwich",
          "post_title": "Norwich",
          "permalink": "https://admin.zenleafdispensaries.com/locations/norwich/",
          "title": "Norwich",
          "guid": "https://admin.zenleafdispensaries.com/?post_type=location&#038;p=22963",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/04/small_Norwich-CT-Zen-Leaf-Dispensaries-Storefront.png",
                  "altText": "Norwich CT Zen Leaf Dispensaries Storefront"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 5375,
              "medical_store_id": 5375,
              "recreational_store_id": 5382,
              "recreationalStoreId": 5382,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "CT003",
              "address_1": "606 W Main St",
              "address_2": null,
              "city": "Norwich",
              "zip": "06360",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0NA==",
                  "post_title": "Connecticut",
                  "slug": "connecticut",
                  "abbr": "CT"
              },
              "lat": "41.515760",
              "lng": "-72.100440"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.515760",
              "lng": "-72.100440"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/04/small_Norwich-CT-Zen-Leaf-Dispensaries-Storefront.png",
              "slug": "Norwich CT Zen Leaf Dispensaries Storefront"
          },
          "medicalStoreId": 5375,
          "medical_store_id": 5375,
          "recreational_store_id": 5382,
          "recreationalStoreId": 5382,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "iHeartJane",
          "address_1": "606 W Main St",
          "address_2": null,
          "city": "Norwich",
          "zip": "06360",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0NA==",
              "post_title": "Connecticut",
              "slug": "connecticut",
              "abbr": "CT"
          },
          "lat": "41.515760",
          "lng": "-72.100440"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 684,
          "locationId": "MD004",
          "slug": "pasadena",
          "post_title": "Pasadena",
          "permalink": "https://admin.zenleafdispensaries.com/locations/pasadena/",
          "title": "Pasadena",
          "guid": "https://admin.zenleafdispensaries.com/?post_type=location&#038;p=684",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/07/2022-ZLD_Pasadena_Exterior-1.jpg",
                  "altText": "Zen Leaf Pasadena Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1654,
              "medical_store_id": 1654,
              "recreational_store_id": 5491,
              "recreationalStoreId": 5491,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "MD004",
              "address_1": "16 Magothy Beach Rd",
              "address_2": null,
              "city": "Pasadena",
              "zip": "21122",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1Nw==",
                  "post_title": "Maryland",
                  "slug": "maryland",
                  "abbr": "MD"
              },
              "lat": "39.121936946235714",
              "lng": "-76.51777501534264"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.121936946235714",
              "lng": "-76.51777501534264"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/07/2022-ZLD_Pasadena_Exterior-1.jpg",
              "slug": "Zen Leaf Pasadena Dispensary"
          },
          "medicalStoreId": 1654,
          "medical_store_id": 1654,
          "recreational_store_id": 5491,
          "recreationalStoreId": 5491,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "iHeartJane",
          "address_1": "16 Magothy Beach Rd",
          "address_2": null,
          "city": "Pasadena",
          "zip": "21122",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1Nw==",
              "post_title": "Maryland",
              "slug": "maryland",
              "abbr": "MD"
          },
          "lat": "39.121936946235714",
          "lng": "-76.51777501534264"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 406,
          "locationId": "PA016",
          "slug": "philadelphia",
          "post_title": "Philadelphia",
          "permalink": "https://admin.zenleafdispensaries.com/locations/philadelphia/",
          "title": "Philadelphia",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=104",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/philly-zl-storefront-scaled.jpg",
                  "altText": "Philadelphia Zen Leaf storefront"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 3427,
              "medical_store_id": 3427,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA016",
              "address_1": "2504 Welsh Rd",
              "address_2": null,
              "city": "Philadelphia",
              "zip": "19152",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.073008",
              "lng": "-75.035078"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "5:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "11:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "9:00 AM",
                  "closedB": true
              }
          },
          "_geoloc": {
              "lat": "40.073008",
              "lng": "-75.035078"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/philly-zl-storefront-scaled.jpg",
              "slug": "Philadelphia Zen Leaf storefront"
          },
          "medicalStoreId": 3427,
          "medical_store_id": 3427,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "2504 Welsh Rd",
          "address_2": null,
          "city": "Philadelphia",
          "zip": "19152",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.073008",
          "lng": "-75.035078"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 401,
          "locationId": "AZ006",
          "slug": "phoenix-n-cave-creek",
          "post_title": "Phoenix (N Cave Creek)",
          "permalink": "https://admin.zenleafdispensaries.com/locations/phoenix-n-cave-creek/",
          "title": "Phoenix (N Cave Creek)",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=93",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/04/small_Exterior-Photo-of-Zen-Leaf-Cannabis-Dispensary-in-Phoenix-N-Cave-Creek-Arizona-4.jpg",
                  "altText": "Phoenix (N Cave Creek) Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": null,
              "medical_store_id": null,
              "recreational_store_id": 3055,
              "recreationalStoreId": 3055,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "AZ006",
              "address_1": "12401 N Cave Creek Rd",
              "address_2": null,
              "city": "Phoenix",
              "zip": "85022",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0MA==",
                  "post_title": "Arizona",
                  "slug": "arizona",
                  "abbr": "AZ"
              },
              "lat": "33.598853",
              "lng": "-112.036692"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Shiprock",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "33.598853",
              "lng": "-112.036692"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/04/small_Exterior-Photo-of-Zen-Leaf-Cannabis-Dispensary-in-Phoenix-N-Cave-Creek-Arizona-4.jpg",
              "slug": "Phoenix (N Cave Creek) Zen Leaf Dispensary"
          },
          "medicalStoreId": null,
          "medical_store_id": null,
          "recreational_store_id": 3055,
          "recreationalStoreId": 3055,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "Sweed",
          "address_1": "12401 N Cave Creek Rd",
          "address_2": null,
          "city": "Phoenix",
          "zip": "85022",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0MA==",
              "post_title": "Arizona",
              "slug": "arizona",
              "abbr": "AZ"
          },
          "lat": "33.598853",
          "lng": "-112.036692"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 408,
          "locationId": "AZ001",
          "slug": "phoenix-w-dunlap",
          "post_title": "Phoenix (W Dunlap)",
          "permalink": "https://admin.zenleafdispensaries.com/locations/phoenix-w-dunlap/",
          "title": "Phoenix (W Dunlap)",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=121",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/phoenix-west-dunlap-300x2041-1.jpg",
                  "altText": "Phoenix West Dunlap Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": null,
              "medical_store_id": null,
              "recreational_store_id": 3323,
              "recreationalStoreId": 3323,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "AZ001",
              "address_1": "4244 W Dunlap Ave",
              "address_2": null,
              "city": "Phoenix",
              "zip": "85051",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0MA==",
                  "post_title": "Arizona",
                  "slug": "arizona",
                  "abbr": "AZ"
              },
              "lat": "33.567897",
              "lng": "-112.15074"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Shiprock",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "10:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "33.567897",
              "lng": "-112.15074"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/phoenix-west-dunlap-300x2041-1.jpg",
              "slug": "Phoenix West Dunlap Zen Leaf Dispensary"
          },
          "medicalStoreId": null,
          "medical_store_id": null,
          "recreational_store_id": 3323,
          "recreationalStoreId": 3323,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "Sweed",
          "address_1": "4244 W Dunlap Ave",
          "address_2": null,
          "city": "Phoenix",
          "zip": "85051",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0MA==",
              "post_title": "Arizona",
              "slug": "arizona",
              "abbr": "AZ"
          },
          "lat": "33.567897",
          "lng": "-112.15074"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 23111,
          "locationId": "PA017",
          "slug": "pittsburgh-mcknight",
          "post_title": "Pittsburgh (McKnight)",
          "permalink": "https://admin.zenleafdispensaries.com/locations/pittsburgh-mcknight/",
          "title": "Pittsburgh (McKnight)",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=23111",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/05/Image72-scaled.jpeg",
                  "altText": "Pittsburgh (McKnight) Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1,
              "medical_store_id": 1,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA017",
              "address_1": "4778 McKnight Rd",
              "address_2": null,
              "city": "Pittsburgh",
              "zip": "15237",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.52340862111339",
              "lng": "-80.0047598319952"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "6:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "4:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.52340862111339",
              "lng": "-80.0047598319952"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2023/05/Image72-scaled.jpeg",
              "slug": "Pittsburgh (McKnight) Zen Leaf Dispensary"
          },
          "medicalStoreId": 1,
          "medical_store_id": 1,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "Sweed",
          "address_1": "4778 McKnight Rd",
          "address_2": null,
          "city": "Pittsburgh",
          "zip": "15237",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.52340862111339",
          "lng": "-80.0047598319952"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 403,
          "locationId": "PA015",
          "slug": "pittsburgh",
          "post_title": "Pittsburgh (Robinson)",
          "permalink": "https://admin.zenleafdispensaries.com/locations/pittsburgh/",
          "title": "Pittsburgh (Robinson)",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=98",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/location_about_IL_chicago-300x1101-1.jpg",
                  "altText": "Pittsburg Zen Leaf Cannabis Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 4082,
              "medical_store_id": 4082,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": 11,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA015",
              "address_1": "6300 Robinson Centre Dr",
              "address_2": null,
              "city": "Pittsburgh",
              "zip": "15205",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.453724",
              "lng": "-80.16052"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "11:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "4:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.453724",
              "lng": "-80.16052"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/location_about_IL_chicago-300x1101-1.jpg",
              "slug": "Pittsburg Zen Leaf Cannabis Dispensary"
          },
          "medicalStoreId": 4082,
          "medical_store_id": 4082,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": 11,
          "storePlatform": "Sweed",
          "address_1": "6300 Robinson Centre Dr",
          "address_2": null,
          "city": "Pittsburgh",
          "zip": "15205",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.453724",
          "lng": "-80.16052"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 422,
          "locationId": "MA002",
          "slug": "plymouth",
          "post_title": "Plymouth",
          "permalink": "https://zenleafdispensaries.com/locations/plymouth/",
          "title": "Plymouth",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=151",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/plymouth-300x2041-1.jpg",
                  "altText": "Plymouth Zen Leaf Dispensaries"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": null,
              "medical_store_id": null,
              "recreational_store_id": 2136,
              "recreationalStoreId": 2136,
              "sweed_embed_url": null,
              "mapZoomOverride": 11,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "MA002",
              "address_1": "11 Richard's Rd",
              "address_2": null,
              "city": "Plymouth",
              "zip": "02360",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1OA==",
                  "post_title": "Massachusetts",
                  "slug": "massachusetts",
                  "abbr": "MA"
              },
              "lat": "41.956674",
              "lng": "-70.708131"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "11:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.956674",
              "lng": "-70.708131"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/plymouth-300x2041-1.jpg",
              "slug": "Plymouth Zen Leaf Dispensaries"
          },
          "medicalStoreId": null,
          "medical_store_id": null,
          "recreational_store_id": 2136,
          "recreationalStoreId": 2136,
          "sweed_embed_url": null,
          "mapZoomOverride": 11,
          "storePlatform": "iHeartJane",
          "address_1": "11 Richard's Rd",
          "address_2": null,
          "city": "Plymouth",
          "zip": "02360",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1OA==",
              "post_title": "Massachusetts",
              "slug": "massachusetts",
              "abbr": "MA"
          },
          "lat": "41.956674",
          "lng": "-70.708131"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 99572,
          "locationId": null,
          "slug": "prescott",
          "post_title": "Prescott",
          "permalink": "https://admin.zenleafdispensaries.com/locations/prescott/",
          "title": "Prescott",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=99572",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 111,
              "medical_store_id": 111,
              "recreational_store_id": 111,
              "recreationalStoreId": 111,
              "sweed_embed_url": "x",
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": null,
              "address_1": "123 E Merritt St",
              "address_2": null,
              "city": "Prescott",
              "zip": "86301",
              "shortTitle": "SWC Prescott by Zen Leaf",
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0MA==",
                  "post_title": "Arizona",
                  "slug": "arizona",
                  "abbr": "AZ"
              },
              "lat": "34.55526667580726",
              "lng": "-112.4688022693175"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Los_Angeles",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "34.55526667580726",
              "lng": "-112.4688022693175"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
              "slug": null
          },
          "medicalStoreId": 111,
          "medical_store_id": 111,
          "recreational_store_id": 111,
          "recreationalStoreId": 111,
          "sweed_embed_url": "x",
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "123 E Merritt St",
          "address_2": null,
          "city": "Prescott",
          "zip": "86301",
          "shortTitle": "SWC Prescott by Zen Leaf",
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0MA==",
              "post_title": "Arizona",
              "slug": "arizona",
              "abbr": "AZ"
          },
          "lat": "34.55526667580726",
          "lng": "-112.4688022693175"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 423,
          "locationId": "IL007",
          "slug": "prospect-heights",
          "post_title": "Prospect Heights",
          "permalink": "https://admin.zenleafdispensaries.com/locations/prospect-heights/",
          "title": "Prospect Heights",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=153",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/prospect-heights-300x2041-1.jpg",
                  "altText": "Prospect Heights"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": null,
              "medical_store_id": null,
              "recreational_store_id": 2614,
              "recreationalStoreId": 2614,
              "sweed_embed_url": null,
              "mapZoomOverride": 11,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "IL007",
              "address_1": "1434 E Rand Rd",
              "address_2": null,
              "city": "Prospect Heights",
              "zip": "60070",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1MA==",
                  "post_title": "Illinois",
                  "slug": "illinois",
                  "abbr": "IL"
              },
              "lat": "42.102301",
              "lng": "-87.966049"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Chicago",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "42.102301",
              "lng": "-87.966049"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/prospect-heights-300x2041-1.jpg",
              "slug": "Prospect Heights"
          },
          "medicalStoreId": null,
          "medical_store_id": null,
          "recreational_store_id": 2614,
          "recreationalStoreId": 2614,
          "sweed_embed_url": null,
          "mapZoomOverride": 11,
          "storePlatform": "iHeartJane",
          "address_1": "1434 E Rand Rd",
          "address_2": null,
          "city": "Prospect Heights",
          "zip": "60070",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1MA==",
              "post_title": "Illinois",
              "slug": "illinois",
              "abbr": "IL"
          },
          "lat": "42.102301",
          "lng": "-87.966049"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 17868,
          "locationId": "NV005",
          "slug": "reno",
          "post_title": "Reno",
          "permalink": "https://admin.zenleafdispensaries.com/locations/reno/",
          "title": "Reno",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=17868",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/09/2023-ZLD_Reno_Exterior-1.jpg",
                  "altText": "Zen Leaf Reno Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 5308,
              "medical_store_id": 5308,
              "recreational_store_id": 762,
              "recreationalStoreId": 762,
              "sweed_embed_url": "1",
              "mapZoomOverride": 13,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "NV005",
              "address_1": "1605 E 2nd St ",
              "address_2": "#103",
              "city": "Reno",
              "zip": "89502 ",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo2NQ==",
                  "post_title": "Nevada",
                  "slug": "nevada",
                  "abbr": "NV"
              },
              "lat": "39.527768510735676",
              "lng": "-119.79145934439995"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Los_Angeles",
              "specialHoursOverride": null,
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "12:00 AM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "12:00 AM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "12:00 AM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "12:00 AM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "12:00 AM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "12:00 AM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "12:00 AM",
                  "open": "8:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.527768510735676",
              "lng": "-119.79145934439995"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/09/2023-ZLD_Reno_Exterior-1.jpg",
              "slug": "Zen Leaf Reno Dispensary"
          },
          "medicalStoreId": 5308,
          "medical_store_id": 5308,
          "recreational_store_id": 762,
          "recreationalStoreId": 762,
          "sweed_embed_url": "1",
          "mapZoomOverride": 13,
          "storePlatform": "Sweed",
          "address_1": "1605 E 2nd St ",
          "address_2": "#103",
          "city": "Reno",
          "zip": "89502 ",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo2NQ==",
              "post_title": "Nevada",
              "slug": "nevada",
              "abbr": "NV"
          },
          "lat": "39.527768510735676",
          "lng": "-119.79145934439995"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 416,
          "locationId": "PA010",
          "slug": "sellersville",
          "post_title": "Sellersville",
          "permalink": "https://admin.zenleafdispensaries.com/locations/sellersville/",
          "title": "Sellersville",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=137",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 781,
              "medical_store_id": 781,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": 12,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA010",
              "address_1": "64 N Main St.",
              "address_2": null,
              "city": "Sellersville",
              "zip": "18960",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.358221",
              "lng": "-75.308989"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "5:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.358221",
              "lng": "-75.308989"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/Default-Store-thumbnail.png",
              "slug": null
          },
          "medicalStoreId": 781,
          "medical_store_id": 781,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": 12,
          "storePlatform": "Sweed",
          "address_1": "64 N Main St.",
          "address_2": null,
          "city": "Sellersville",
          "zip": "18960",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.358221",
          "lng": "-75.308989"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 424,
          "locationId": "MA001",
          "slug": "sharon",
          "post_title": "Sharon",
          "permalink": "https://admin.zenleafdispensaries.com/locations/sharon/",
          "title": "Sharon",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=155",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/sharon-300x2041-1.jpg",
                  "altText": "Sharon Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 4226,
              "medical_store_id": 4226,
              "recreational_store_id": 2137,
              "recreationalStoreId": 2137,
              "sweed_embed_url": null,
              "mapZoomOverride": 11,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "MA001",
              "address_1": "2 Merchant St",
              "address_2": "Suite 1",
              "city": "Sharon",
              "zip": "02067",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1OA==",
                  "post_title": "Massachusetts",
                  "slug": "massachusetts",
                  "abbr": "MA"
              },
              "lat": "42.118054",
              "lng": "-71.234766"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "11:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "42.118054",
              "lng": "-71.234766"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/sharon-300x2041-1.jpg",
              "slug": "Sharon Zen Leaf Dispensary"
          },
          "medicalStoreId": 4226,
          "medical_store_id": 4226,
          "recreational_store_id": 2137,
          "recreationalStoreId": 2137,
          "sweed_embed_url": null,
          "mapZoomOverride": 11,
          "storePlatform": "iHeartJane",
          "address_1": "2 Merchant St",
          "address_2": "Suite 1",
          "city": "Sharon",
          "zip": "02067",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1OA==",
              "post_title": "Massachusetts",
              "slug": "massachusetts",
              "abbr": "MA"
          },
          "lat": "42.118054",
          "lng": "-71.234766"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 420,
          "locationId": "IL001",
          "slug": "st-charles",
          "post_title": "St. Charles",
          "permalink": "https://admin.zenleafdispensaries.com/locations/st-charles/",
          "title": "St. Charles",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=146",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/st-charles-300x2041-1.jpg",
                  "altText": "St Charles Zen Leaf"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1843,
              "medical_store_id": 1843,
              "recreational_store_id": 1846,
              "recreationalStoreId": 1846,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "IL001",
              "address_1": "3691 E Main Street",
              "address_2": null,
              "city": "St Charles",
              "zip": "60174",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1MA==",
                  "post_title": "Illinois",
                  "slug": "illinois",
                  "abbr": "IL"
              },
              "lat": "41.920752",
              "lng": "-88.271476"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Chicago",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "9:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "10:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "41.920752",
              "lng": "-88.271476"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/st-charles-300x2041-1.jpg",
              "slug": "St Charles Zen Leaf"
          },
          "medicalStoreId": 1843,
          "medical_store_id": 1843,
          "recreational_store_id": 1846,
          "recreationalStoreId": 1846,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "3691 E Main Street",
          "address_2": null,
          "city": "St Charles",
          "zip": "60174",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1MA==",
              "post_title": "Illinois",
              "slug": "illinois",
              "abbr": "IL"
          },
          "lat": "41.920752",
          "lng": "-88.271476"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 99570,
          "locationId": null,
          "slug": "tempe",
          "post_title": "Tempe",
          "permalink": "https://admin.zenleafdispensaries.com/locations/tempe/",
          "title": "Tempe",
          "guid": "https://zenleafdispensaries.com/?post_type=location&#038;p=99570",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/HYertSpR5bEd4tJiTliQ_CLASSIX-WEB-98-201.jpg",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 111,
              "medical_store_id": 111,
              "recreational_store_id": 111,
              "recreationalStoreId": 111,
              "sweed_embed_url": "x",
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": null,
              "address_1": "520 S Price Rd",
              "address_2": null,
              "city": "Tempe",
              "zip": "85288",
              "shortTitle": "Cannabist Tempe by Zen Leaf",
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0MA==",
                  "post_title": "Arizona",
                  "slug": "arizona",
                  "abbr": "AZ"
              },
              "lat": "33.42556716906774",
              "lng": "-111.89223007116469"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Shiprock",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "33.42556716906774",
              "lng": "-111.89223007116469"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2025/03/HYertSpR5bEd4tJiTliQ_CLASSIX-WEB-98-201.jpg",
              "slug": null
          },
          "medicalStoreId": 111,
          "medical_store_id": 111,
          "recreational_store_id": 111,
          "recreationalStoreId": 111,
          "sweed_embed_url": "x",
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "520 S Price Rd",
          "address_2": null,
          "city": "Tempe",
          "zip": "85288",
          "shortTitle": "Cannabist Tempe by Zen Leaf",
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0MA==",
              "post_title": "Arizona",
              "slug": "arizona",
              "abbr": "AZ"
          },
          "lat": "33.42556716906774",
          "lng": "-111.89223007116469"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 421,
          "locationId": "MD003",
          "slug": "towson",
          "post_title": "Towson",
          "permalink": "https://admin.zenleafdispensaries.com/locations/towson/",
          "title": "Towson",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=149",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/towson.jpg",
                  "altText": ""
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1882,
              "medical_store_id": 1882,
              "recreational_store_id": 5490,
              "recreationalStoreId": 5490,
              "sweed_embed_url": null,
              "mapZoomOverride": 13,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "MD003",
              "address_1": "1608 E Joppa Rd",
              "address_2": null,
              "city": "Towson",
              "zip": "21286",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo1Nw==",
                  "post_title": "Maryland",
                  "slug": "maryland",
                  "abbr": "MD"
              },
              "lat": "39.397163654026464",
              "lng": "-76.56675086441793"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "8:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "9:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.397163654026464",
              "lng": "-76.56675086441793"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/towson.jpg",
              "slug": null
          },
          "medicalStoreId": 1882,
          "medical_store_id": 1882,
          "recreational_store_id": 5490,
          "recreationalStoreId": 5490,
          "sweed_embed_url": null,
          "mapZoomOverride": 13,
          "storePlatform": "iHeartJane",
          "address_1": "1608 E Joppa Rd",
          "address_2": null,
          "city": "Towson",
          "zip": "21286",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo1Nw==",
              "post_title": "Maryland",
              "slug": "maryland",
              "abbr": "MD"
          },
          "lat": "39.397163654026464",
          "lng": "-76.56675086441793"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 410,
          "locationId": "PA013",
          "slug": "washington",
          "post_title": "Washington",
          "permalink": "https://admin.zenleafdispensaries.com/locations/washington/",
          "title": "Washington",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=125",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/07/2022_ZenLeaf_Pennsylvania_Washington.jpg",
                  "altText": "Washington Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 4084,
              "medical_store_id": 4084,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA013",
              "address_1": "799 W Chestnut St",
              "address_2": null,
              "city": "Washington",
              "zip": "15301",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.169199",
              "lng": "-80.262645"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "11:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "4:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.169199",
              "lng": "-80.262645"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/07/2022_ZenLeaf_Pennsylvania_Washington.jpg",
              "slug": "Washington Zen Leaf Dispensary"
          },
          "medicalStoreId": 4084,
          "medical_store_id": 4084,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "799 W Chestnut St",
          "address_2": null,
          "city": "Washington",
          "zip": "15301",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.169199",
          "lng": "-80.262645"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 666,
          "locationId": "CT002",
          "slug": "waterbury",
          "post_title": "Waterbury",
          "permalink": "https://admin.zenleafdispensaries.com/locations/waterbury/",
          "title": "Waterbury",
          "guid": "https://admin.zenleafdispensaries.com/?post_type=location&#038;p=666",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/05/ZENLeaf_Meds-Family-Home_Store-Interior-800x4281-1.jpeg",
                  "altText": "Zen Leaf Interior"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 4194,
              "medical_store_id": 4194,
              "recreational_store_id": 6219,
              "recreationalStoreId": 6219,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "iHeartJane"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "CT002",
              "address_1": "237 E Aurora St",
              "address_2": null,
              "city": "Waterbury",
              "zip": "06708",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo0NA==",
                  "post_title": "Connecticut",
                  "slug": "connecticut",
                  "abbr": "CT"
              },
              "lat": "41.570253",
              "lng": "-73.057776"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "9:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "8:00 PM",
                  "open": "8:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "12:00 AM",
                  "open": "12:00 AM",
                  "closedB": true
              }
          },
          "_geoloc": {
              "lat": "41.570253",
              "lng": "-73.057776"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/05/ZENLeaf_Meds-Family-Home_Store-Interior-800x4281-1.jpeg",
              "slug": "Zen Leaf Interior"
          },
          "medicalStoreId": 4194,
          "medical_store_id": 4194,
          "recreational_store_id": 6219,
          "recreationalStoreId": 6219,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "iHeartJane",
          "address_1": "237 E Aurora St",
          "address_2": null,
          "city": "Waterbury",
          "zip": "06708",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo0NA==",
              "post_title": "Connecticut",
              "slug": "connecticut",
              "abbr": "CT"
          },
          "lat": "41.570253",
          "lng": "-73.057776"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 400,
          "locationId": "PA003",
          "slug": "west-chester",
          "post_title": "West Chester",
          "permalink": "https://admin.zenleafdispensaries.com/locations/west-chester/",
          "title": "West Chester",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=90",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/west-chester-300x2041-1.jpg",
                  "altText": "West Chester Zen Leaf Dispensaries"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 3949,
              "medical_store_id": 3949,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA003",
              "address_1": "300 Oakland Rd",
              "address_2": null,
              "city": "West Chester",
              "zip": "19382",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "39.886448",
              "lng": "-75.552006"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "4:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.886448",
              "lng": "-75.552006"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/west-chester-300x2041-1.jpg",
              "slug": "West Chester Zen Leaf Dispensaries"
          },
          "medicalStoreId": 3949,
          "medical_store_id": 3949,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "300 Oakland Rd",
          "address_2": null,
          "city": "West Chester",
          "zip": "19382",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "39.886448",
          "lng": "-75.552006"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 675,
          "locationId": "WV002",
          "slug": "westover",
          "post_title": "Westover",
          "permalink": "https://admin.zenleafdispensaries.com/locations/westover/",
          "title": "Westover",
          "guid": "https://admin.zenleafdispensaries.com/?post_type=location&#038;p=675",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/05/westover_about1.jpg",
                  "altText": "Zen Leaf Westover"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1,
              "medical_store_id": 1,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": "1",
              "mapZoomOverride": 13,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "WV002",
              "address_1": "871 Fairmont Rd",
              "address_2": null,
              "city": "Westover",
              "zip": "26501",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo4NQ==",
                  "post_title": "West Virginia",
                  "slug": "west-virginia",
                  "abbr": "WV"
              },
              "lat": "39.631290",
              "lng": "-79.984580"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "5:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "5:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.631290",
              "lng": "-79.984580"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/05/westover_about1.jpg",
              "slug": "Zen Leaf Westover"
          },
          "medicalStoreId": 1,
          "medical_store_id": 1,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": "1",
          "mapZoomOverride": 13,
          "storePlatform": "Sweed",
          "address_1": "871 Fairmont Rd",
          "address_2": null,
          "city": "Westover",
          "zip": "26501",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo4NQ==",
              "post_title": "West Virginia",
              "slug": "west-virginia",
              "abbr": "WV"
          },
          "lat": "39.631290",
          "lng": "-79.984580"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 766,
          "locationId": "WV003",
          "slug": "wheeling",
          "post_title": "Wheeling",
          "permalink": "https://admin.zenleafdispensaries.com/locations/wheeling/",
          "title": "Wheeling",
          "guid": "http://zenleafdispensaries.com/?post_type=location&#038;p=766",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/07/2022_ZenLeaf_Wheeling-1-scaled.jpg",
                  "altText": "Wheeling Zen Leaf Dispensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 1,
              "medical_store_id": 1,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": "12312",
              "mapZoomOverride": 12,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "WV003",
              "address_1": "235 Warwood Ave",
              "address_2": null,
              "city": "Wheeling",
              "zip": "26003",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo4NQ==",
                  "post_title": "West Virginia",
                  "slug": "west-virginia",
                  "abbr": "WV"
              },
              "lat": "40.104324",
              "lng": "-80.701828"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "5:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "5:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "40.104324",
              "lng": "-80.701828"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/07/2022_ZenLeaf_Wheeling-1-scaled.jpg",
              "slug": "Wheeling Zen Leaf Dispensary"
          },
          "medicalStoreId": 1,
          "medical_store_id": 1,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": "12312",
          "mapZoomOverride": 12,
          "storePlatform": "Sweed",
          "address_1": "235 Warwood Ave",
          "address_2": null,
          "city": "Wheeling",
          "zip": "26003",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo4NQ==",
              "post_title": "West Virginia",
              "slug": "west-virginia",
              "abbr": "WV"
          },
          "lat": "40.104324",
          "lng": "-80.701828"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 676,
          "locationId": "PA017",
          "slug": "wynnewood",
          "post_title": "Wynnewood Factory Store",
          "permalink": "https://admin.zenleafdispensaries.com/locations/wynnewood/",
          "title": "Wynnewood Factory Store",
          "guid": "https://admin.zenleafdispensaries.com/?post_type=location&#038;p=676",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/06/2022_Zen-Leaf-Wynnewood_Exterior-scaled1.jpg",
                  "altText": "Zen Leaf Wynnewood"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 4486,
              "medical_store_id": 4486,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA017",
              "address_1": "257 Lancaster Ave.",
              "address_2": null,
              "city": "Wynnewood",
              "zip": "19096",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "40.00365266653665",
              "lng": "-75.28213827015298"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "6:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "11:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": true
              }
          },
          "_geoloc": {
              "lat": "40.00365266653665",
              "lng": "-75.28213827015298"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2022/06/2022_Zen-Leaf-Wynnewood_Exterior-scaled1.jpg",
              "slug": "Zen Leaf Wynnewood"
          },
          "medicalStoreId": 4486,
          "medical_store_id": 4486,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "257 Lancaster Ave.",
          "address_2": null,
          "city": "Wynnewood",
          "zip": "19096",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "40.00365266653665",
          "lng": "-75.28213827015298"
      },
      {
          "__typename": "Location_Nap",
          "post_id": 418,
          "locationId": "PA002",
          "slug": "york",
          "post_title": "York",
          "permalink": "https://admin.zenleafdispensaries.com/locations/york/",
          "title": "York",
          "guid": "http://verano-ssot.local/?post_type=location&#038;p=142",
          "location_status": "Open",
          "media": {
              "__typename": "Location_Media",
              "thumbnailImage": {
                  "__typename": "MediaItem",
                  "sourceUrl": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/york-300x2041-1.jpg",
                  "altText": "York Zen Leaf DIspensary"
              }
          },
          "storeEmbeds": {
              "__typename": "Location_Storeembeds",
              "medicalStoreId": 2438,
              "medical_store_id": 2438,
              "recreational_store_id": null,
              "recreationalStoreId": null,
              "sweed_embed_url": null,
              "mapZoomOverride": null,
              "storePlatform": "Sweed"
          },
          "nap": {
              "__typename": "Location_Nap",
              "locationId": "PA002",
              "address_1": "890 Loucks Road",
              "address_2": null,
              "city": "York",
              "zip": "17404",
              "shortTitle": null,
              "state": {
                  "__typename": "State",
                  "id": "cG9zdDo3NQ==",
                  "post_title": "Pennsylvania",
                  "slug": "pennsylvania",
                  "abbr": "PA"
              },
              "lat": "39.979839",
              "lng": "-76.75189"
          },
          "hours": {
              "__typename": "Location_Hours",
              "timezoneOffset": "America/Detroit",
              "specialHoursOverride": [
                  {
                      "__typename": "Location_Hours_specialHoursOverride",
                      "closed": null,
                      "closingTime": "7:00 pm",
                      "date": "07/04/2025",
                      "noticeToDisplayOnWebsite": "4th of July",
                      "openingTime": "10:00 am"
                  }
              ],
              "monday": {
                  "__typename": "Location_Hours_Monday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "tuesday": {
                  "__typename": "Location_Hours_Tuesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "wednesday": {
                  "__typename": "Location_Hours_Wednesday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "thursday": {
                  "__typename": "Location_Hours_Thursday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "friday": {
                  "__typename": "Location_Hours_Friday",
                  "closed": "8:00 PM",
                  "open": "9:00 AM",
                  "closedB": null
              },
              "saturday": {
                  "__typename": "Location_Hours_Saturday",
                  "closed": "7:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              },
              "sunday": {
                  "__typename": "Location_Hours_Sunday",
                  "closed": "6:00 PM",
                  "open": "10:00 AM",
                  "closedB": null
              }
          },
          "_geoloc": {
              "lat": "39.979839",
              "lng": "-76.75189"
          },
          "thumbnail_image": {
              "url": "https://admin.zenleafdispensaries.com/wp-content/uploads/2021/12/york-300x2041-1.jpg",
              "slug": "York Zen Leaf DIspensary"
          },
          "medicalStoreId": 2438,
          "medical_store_id": 2438,
          "recreational_store_id": null,
          "recreationalStoreId": null,
          "sweed_embed_url": null,
          "mapZoomOverride": null,
          "storePlatform": "Sweed",
          "address_1": "890 Loucks Road",
          "address_2": null,
          "city": "York",
          "zip": "17404",
          "shortTitle": null,
          "state": {
              "__typename": "State",
              "id": "cG9zdDo3NQ==",
              "post_title": "Pennsylvania",
              "slug": "pennsylvania",
              "abbr": "PA"
          },
          "lat": "39.979839",
          "lng": "-76.75189"
      }
  ]
  }
}
