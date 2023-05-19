import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={roboto.className}>
      <h1>Szablon</h1>
      <h2>Domun#5047</h2>
    </div>
  )
}
