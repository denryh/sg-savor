import { useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

export default function ClientPortal({
  children,
  selector,
}: {
  children: ReactNode
  selector: string
}) {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.body
    setMounted(true)
  }, [selector])

  return mounted
    ? createPortal(<div id={selector}>{children}</div>, ref.current as Element)
    : null
}
