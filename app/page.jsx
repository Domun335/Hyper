import Image from 'next/image'

export default function Home() {
  return (
    <main className="main-page">
      <Image
        src="/logo.svg"
        alt="Hyper"
        width={280}
        height={280}
        className="main-page__logo"
      />
    </main>
  )
}
