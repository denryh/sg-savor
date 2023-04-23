import Link from 'next/link'
import Logo from './Logo'
import Menu from './Menu'

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 shadow">
      <Link href="/" className="flex items-center gap-2">
        <Logo width={32} height={32} />
        <span className="text-lg font-semibold">Saigon Savor</span>
      </Link>
      <Menu />
    </nav>
  )
}
