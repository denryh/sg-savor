import { PropsWithChildren } from 'react'
import NavBar from './NavBar'
import { Source_Sans_Pro } from 'next/font/google'
import Image from 'next/image'

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export default function Layout({ children }: PropsWithChildren) {
  const className = [
    sourceSansPro.className,
    'min-h-screen flex flex-col',
  ].join(' ')

  return (
    <div className={className}>
      <NavBar />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-auto flex justify-between border-t p-4">
      <p>&copy; Copyright 2023, denryh</p>
      <ul className="flex">
        <li>
          <a href="https://github.com/denryh" target="_blank">
            <Image
              src="/assets/github-mark.svg"
              alt="denryh's github"
              width={24}
              height={24}
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}
