export const gqlQuery = `
query {
  keywordSearch(
    filter: {
      query: "e"
      lat: -32.9283
      lon: 151.7817
      radius: 20
      source: EVENTS
      topicCategoryId: 546
    }
    sort: { sortField: DATETIME, sortOrder: DESC }
  ) {
    edges {
      node {
        result {
          ...on Event {
            title
            description
            dateTime
            eventUrl
            going
            maxTickets
            duration
            imageUrl
            venue {
              name
              lat
              lng
              address
              city
            }
            group {
              name
              urlname
              groupPhoto {
                id
                baseUrl
                preview
              }
              logo {
                id
                baseUrl
                preview
              }
            }
          }
        }
      }
    }
  }
}
`