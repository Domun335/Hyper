import './styles/footer.scss'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Link href="https://github.com/Domun335">
      <p className="footer">Dominik Zwoliński ©{currentYear}</p>
    </Link>
  )
}
