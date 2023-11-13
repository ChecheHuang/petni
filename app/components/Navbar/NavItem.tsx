import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { useHover } from 'usehooks-ts'

function NavItem({
  alias,
  label,
  href,
}: {
  alias: string
  label: string
  href: string
}) {
  const pathname = usePathname()
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  const active = pathname === href
  const imgUrl =
    isHover || active
      ? `/images/header/${alias}-pink.png`
      : `/images/header/${alias}.png`
  return (
    <Link ref={hoverRef} className="group flex gap-2 " href={href}>
      <Image
        src={imgUrl}
        alt={alias}
        width={25}
        height={25}
        className="h-[25px] w-[25px]"
      />
      <span
        className={cn(
          ' overflow-hidden whitespace-nowrap  text-info group-hover:w-auto  ',
          'transition-all ',
          active ? 'w-auto' : 'w-0 ',
        )}
      >
        {label}
      </span>
    </Link>
  )
}

export default NavItem
