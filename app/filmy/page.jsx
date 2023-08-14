import './filmy.scss'
import { getPosts } from '@/lib/queries'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Filmy',
}

export default async function Filmy() {
  const posts = await getPosts()

  return posts.length > 0 ? (
    <main className="posts">
      {posts.map((post) => (
        <Link className="post" href={`filmy/${post.slug}`} key={post.id}>
          <span className="post__trapeze">{post.releaseDate.replaceAll('-', '.')}</span>

          <Image
            src={post.image.url}
            alt={post.title}
            width="400"
            height="400"
            className="post__image"
          />

          <p className="post__title">{post.title}</p>
        </Link>
      ))}
    </main>
  ) : (
    <h1 style={{ textAlign: 'center' }}>501</h1>
  )
}
