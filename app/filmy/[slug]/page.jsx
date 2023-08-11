import './postFilmy.scss'
import { getPostBySlug } from '@/lib/queries'
import CustomImage from '@/components/CustomImage'
import Link from 'next/link'

export default async function PostFilmy({ params }) {
  const post = await getPostBySlug(params)

  return (
    <article className="post-film">
      <CustomImage
        src={post.image.url}
        alt={post.title}
        width="650"
        height="800"
        className="post-film__image"
      />
      <div className="post-film__description">
        <p>{post.duration} min</p>
        <p>{post.releaseDate}</p>
      </div>

      <hr className="post-film__border" />

      <h1 className="post-film__title">{post.title}</h1>

      <div
        dangerouslySetInnerHTML={{ __html: post.description.html }}
        className="post-film__content"
      />

      <hr className="post-film__border" />

      <div className="post-film__images">
        {post.images.map((image) => (
          <CustomImage
            src={image.url}
            alt={post.title}
            width="400"
            height="400"
            key={image.url}
            className="post-film__images--img"
          />
        ))}
      </div>

      <Link href="/filmy">
        <p className="post-film__return">Powrót ↗</p>
      </Link>
    </article>
  )
}
