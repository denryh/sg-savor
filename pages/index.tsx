import { Source_Sans_Pro } from 'next/font/google'

import NavBar from '@/components/NavBar'

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export default function Home() {
  return (
    <main className={sourceSansPro.className}>
      <NavBar />
    </main>
  )
}
