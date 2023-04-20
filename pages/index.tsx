import { Source_Sans_Pro } from 'next/font/google'

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {
  return <main className={sourceSansPro.className}></main>
}
