import {waitAndRetry} from '@/functions/waitAndRetry'
import {initializeWpApollo} from '@/lib/wordpress/connector'
// import * as Sentry from '@sentry/nextjs'
import getStateBySlugQuery from '@/functions/queryStateByStateSlug'

/**
 *
 * @param {string} slug //
 */
export default async function getStateBySlug(slug) {
  // No slug? Bail...
  if (!slug) {
    return {}
  }

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Execute query.
  const state = await apolloClient
    .query({
      query: getStateBySlugQuery,
      variables: {
        stateSlug: slug
      }
    })
    .then(
      (state) =>
        state?.data?.stateBy ?? {
          found: false,
          message: '404 Bad Request'
        }
    )
    .catch((error) => {
      // if (!error.message.includes('code 429')) Sentry.captureException(error)
      return {
        isError: true,
        message: error.message
      }
    })

  const is429Error = state?.isError && state?.message?.includes('code 429')
  if (is429Error) {
    return await waitAndRetry(() => getStateBySlug(slug), 5000)
  } else return state
}
