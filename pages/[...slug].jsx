import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import Image from 'next/image'
import Link from 'next/link'

export default function Movie({ movie }) {
  return (
    <div className="movie-container">
      <h1>{movie.title}</h1>
      <h4>{movie.releaseDate}</h4>
      <Image src={movie.image.url} alt={movie.title} width={400} height={500} />
      <div dangerouslySetInnerHTML={{ __html: movie.description.html }} />
      <Link href="/">
        <button>Powrót</button>
      </Link>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0]

  const { data } = await client.query({
    query: gql`
      query movieBySlug($slug: String!) {
        hypers(where: { slug: $slug }) {
          title
          releaseDate
          image {
            url
          }
          description {
            raw
            html
          }
          slug
        }
      }
    `,
    variables: { slug },
  })
  const { hypers } = data
  const movie = hypers[0]

  return { props: { movie: movie } }
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        hypers {
          slug
        }
      }
    `,
  })
  const { hypers } = data
  const paths = hypers.map((movie) => ({
    params: { slug: [movie.slug] },
  }))

  return { paths, fallback: false }
}
