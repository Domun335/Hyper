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
    hypers {
      id
      title
      releaseDate
      image { url }
      slug
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
        image { url }
        description { html }
      }
    }
  `,
    { slug: params.slug }
  )
  return hyper
}
