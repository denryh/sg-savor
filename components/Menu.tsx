import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'

export default function Menu() {
  return (
    <div
      className="h-6 w-6 cursor-pointer"
      onClick={() => console.log('menu clicked')}
    >
      <Bars3BottomRightIcon />
    </div>
  )
}
