import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
        <Image src="/assets/author.jpg" width={144} height={144} alt="denryh" />
        <Link href="/" className="text-xl underline">
          Home
        </Link>
      </div>
    </>
  )
}
