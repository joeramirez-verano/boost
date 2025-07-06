import gql from 'graphql-tag'

export const getStateBySlugQuery = gql`
  query GetState($stateSlug: String) {
    stateBy(slug: $stateSlug) {
      databaseId
      state_integrations {
        emailAddress
        fieldGroupName
        klavyio
        liveChatId
        phoneNumber
      }
      slug
      stateId
      title
    }
  }
`

export default getStateBySlugQuery
