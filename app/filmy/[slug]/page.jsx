import { getPostBySlug } from '@/lib/queries'

export default async function Post({ params }) {
  const post = await getPostBySlug(params)

  console.log(post)
  return (
    <>
      <h1>ssd</h1>
    </>
  )
}
