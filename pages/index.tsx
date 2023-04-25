import { Source_Sans_Pro } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Head from 'next/head'
import Image from 'next/image'

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>SG Savor</title>
      </Head>

      <main className={sourceSansPro.className}>
        <NavBar />

        <div className="m-4">
          <Chat />
        </div>
      </main>
    </>
  )
}

function Chat() {
  return (
    <div className="flex flex-col items-start gap-2 rounded border p-4">
      <Message content="Ê, đi ăn ko?" own />
      <Message content="Ok" />
      <Message content="Ăn cái gì?" own />
      <Message content="Gì cũng được" />
      <Message content="Đi ăn cơm tấm nha" own />
      <Message content="Thôi, cơm khô lắm, ăn cái khác đi" />
      <Message
        own
        content={
          <Image
            src="/assets/disappointed.jpg"
            alt="disappointed meme"
            width={300}
            height={300}
            className="rounded-2xl"
          />
        }
      />
    </div>
  )
}

function Message({
  content,
  own = false,
}: {
  content: React.ReactNode
  own?: boolean
}) {
  const ownClassname = own ? 'ml-auto bg-blue-400 text-white' : 'bg-stone-200'

  return (
    <div className={`relative w-fit rounded-2xl px-2 py-1 ${ownClassname}`}>
      <p>{content}</p>
    </div>
  )
}
