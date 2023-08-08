import './filmy.scss'
import { getPosts } from '@/lib/queries'
import Image from 'next/image'
import Link from 'next/link'

export default async function Filmy() {
  const posts = await getPosts()

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <span className="post__date">{post.releaseDate}</span>
          <Image
            src={post.image.url}
            alt={post.title}
            width="400"
            height="500"
            className="post__image"
          />
          <Link href={`filmy/${post.slug}`}>
            <p className="post__title">{post.title}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
