import gql from 'graphql-tag'

export const getLocationsQuery = gql`
  query GetLocations($first: Int) {
    locations(first: $first, where: {orderby: {field: TITLE, order: ASC}}) {
      edges {
        cursor
        node {
          post_id: locationId
          locationId
          slug
          post_title: title
          permalink: link
          title
          guid
          location_status {
            locationStatus
          }
          media {
            thumbnailImage {
              sourceUrl
              altText
            }
          }
          storeEmbeds {
            medicalStoreId
            medical_store_id: medicalStoreId
            recreational_store_id: recreationalStoreId
            recreationalStoreId
            sweed_embed_url: sweedEmbedUrl
            mapZoomOverride
            storePlatform
          }
          nap {
            locationId
            address_1: address1
            address_2: address2
            city
            zip
            shortTitle
            state {
              ... on State {
                id
                post_title: title
                slug
              }
            }
            lat
            lng
          }
          hours {
            timezoneOffset
            specialHoursOverride {
              closed
              closingTime
              date
              noticeToDisplayOnWebsite
              openingTime
            }
            monday {
              closed
              open
              closedB
            }
            tuesday {
              closed
              open
              closedB
            }
            wednesday {
              closed
              open
              closedB
            }
            thursday {
              closed
              open
              closedB
            }
            friday {
              closed
              open
              closedB
            }
            saturday {
              closed
              open
              closedB
            }
            sunday {
              closed
              open
              closedB
            }
          }
        }
      }
    }
  }
`

export default getLocationsQuery
