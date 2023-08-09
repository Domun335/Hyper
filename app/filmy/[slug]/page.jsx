import './postFilmy.scss'
import { getPostBySlug } from '@/lib/queries'
import Image from 'next/image'

export default async function PostFilmy({ params }) {
  const hyper = await getPostBySlug(params)

  return (
    <article className="post-film">
      <Image src={hyper.image.url} alt={hyper.title} width="500" height="600" />
      <h1>{hyper.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: hyper.description.html }} />
    </article>
  )
}
