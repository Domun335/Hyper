import Image from 'next/image'

export default function Home() {
  return (
    <div className="main-page">
      <Image src="/logo.svg" alt="Hyper" width="280" height="280" />
    </div>
  )
}
