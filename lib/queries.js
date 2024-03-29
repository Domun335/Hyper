export async function fetchGraphQL(query, variables) {
  const response = await fetch(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhxdefy41i4p01tb20nd25vb/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}

export async function getPosts() {
  const { hypers } = await fetchGraphQL(`
  query getPosts {
    hypers(first: 1000, orderBy: releaseDate_DESC) {
      id
      title
      slug
      releaseDate
      duration
      image { url }
    }
  }
  `)

  return hypers
}

export async function getPostBySlug(params) {
  const { hyper } = await fetchGraphQL(
    `
    query GetPostBySlug($slug: String!) {
      hyper(where: { slug: $slug }) {
        title
        slug
        releaseDate
        duration
        image { url }
        description { html }
        images {
          url
          id
        }
      }
    }
  `,
    { slug: params.slug }
  )
  return hyper
}
