import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { useHover } from 'usehooks-ts'

function NavItems() {
  const routes = [
    {
      href: '/',
      alias: 'pair',
      label: '配對',
    },
    {
      href: '/collect',
      alias: 'collect',
      label: '收藏',
    },
    {
      href: '/theme',
      alias: 'theme',
      label: '主題館',
    },
    {
      href: '/deliver',
      alias: 'deliver',
      label: '送養',
    },
    {
      href: '/emergency',
      alias: 'emergency',
      label: '急診',
    },
  ]
  return (
    <div className="grid w-[470px] grid-cols-5 items-center justify-items-center ">
      {routes.map((route) => (
        <NavItem key={route.alias} {...route} />
      ))}
    </div>
  )
}

export default NavItems

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
