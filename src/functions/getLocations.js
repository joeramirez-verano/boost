import {waitAndRetry} from '@/functions/waitAndRetry'
import {initializeWpApollo} from '@/lib/wordpress/connector'
import getLocationsQuery from '@/lib/wordpress/locations/getInitialLocations'
import States from 'us-state-converter'

/**
 *
 */
export default async function getLocations() {
  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Execute query.
  const locations = await apolloClient
    .query({
      query: getLocationsQuery,
      variables: {
        first: 20000
      }
    })
    .then(
      (location) =>
        location?.data?.locations?.edges?.map((edge) => {
          let node = JSON.parse(JSON.stringify(edge.node))
          node._geoloc = {lat: node.nap.lat, lng: node.nap.lng}
          node.thumbnail_image = {url: node?.media?.thumbnailImage?.sourceUrl || null, slug: node?.media?.thumbnailImage?.altText || null}
          node.location_status = node.location_status.locationStatus
          node = {...node, ...node.storeEmbeds, ...node.nap}
          if (node.state) node.state.abbr = States.abbr(node.state.post_title)
          return node
        }) ?? null
    )
    .catch((error) => {
      return {
        isError: true,
        message: error.message
      }
    })
  const is429Error = locations?.isError && locations?.message?.includes('code 429')
  if (is429Error) {
    return await waitAndRetry(() => getLocations(), 5000)
  } else return locations
}
