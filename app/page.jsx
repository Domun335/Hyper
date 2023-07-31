import { getPosts } from '@/lib/queries'
import Image from 'next/image'

export default async function Home() {
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
          <p className="post__title">{post.title}</p>
        </div>
      ))}
    </div>
  )
}
