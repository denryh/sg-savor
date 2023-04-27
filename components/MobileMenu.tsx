import Link from 'next/link'

export function MobileMenu() {
  return (
    <ul
      className="ml-auto flex h-full w-2/5 min-w-fit flex-col items-center gap-8 bg-white p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <li className="border-black/50 hover:border-b">
        <Link href="/about">Giới thiệu</Link>
      </li>
      <li className="border-black/50 hover:border-b">
        <Link href="/foods">Tìm kiếm</Link>
      </li>
      <li className="border-black/50 hover:border-b">
        <Link href="/submit">Góp sức</Link>
      </li>
    </ul>
  )
}
