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
  query Hypers {
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
  const { post } = await fetchGraphQL(
    `
    query Hypers($slug: String!) {
      hypers(where: { slug: $slug }) {
        title
        slug
      }
    }
  `,
    { slug: params.slug }
  )
  return post
}
