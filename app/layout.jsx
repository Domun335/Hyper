import './globals.scss'
import Head from './head'

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <Head />
      <body>{children}</body>
    </html>
  )
}
