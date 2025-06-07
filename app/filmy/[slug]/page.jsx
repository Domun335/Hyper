import './moviePost.scss'
import { getPostBySlug } from '@/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/gallery'

export default async function MoviePost({ params }) {
  const post = await getPostBySlug(await params)

  return (
    <article className="movie-post">
      <Image
        src={post.image.url}
        alt={post.title}
        width={650}
        height={800}
        className="movie-post__image"
      />
      <div className="movie-post__description">
        <p>{post.duration} min</p>
        <p>{post.releaseDate.replaceAll('-', '/')}</p>
      </div>

      <hr className="movie-post__border" />

      <h1 className="movie-post__title">{post.title}</h1>

      <div
        dangerouslySetInnerHTML={{ __html: post.description.html }}
        className="movie-post__content"
      />

      <hr className="movie-post__border" />

      <ImageGallery date={post} />

      <Link href="/filmy">
        <p className="movie-post__return">Powrót ↗</p>
      </Link>
    </article>
  )
}
