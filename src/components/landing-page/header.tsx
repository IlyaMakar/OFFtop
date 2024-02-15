'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../../../public/LogoVoenBil.svg'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

const Header = () => {
	const [path, setPath] = useState('#products')
	return (
		<header
			className='p-4
      flex
      justify-center
      items-center
  '
		>
			<Link
				href={'/'}
				className='w-full flex gap-2
        justify-left items-center'
			>
				<Image src={Logo} alt='Logo' width={25} height={25} />
				<span
					className='font-semibold
          dark:text-white
        '
				>
					OFFtop
				</span>
			</Link>

			<aside
				className='flex
        w-full
        gap-2
        justify-end
      '
			>
				<Link href={'/login'}>
					<Button variant='btn-secondary' className=' p-1 hidden sm:block'>
						Вход
					</Button>
				</Link>
				<Link href='/signup'>
					<Button variant='btn-secondary' className='whitespace-nowrap'>
						Регистрация
					</Button>
				</Link>
			</aside>
		</header>
	)
}

export default Header

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'group block select-none space-y-1 font-medium leading-none'
					)}
					{...props}
				>
					<div className='text-white text-sm font-medium leading-none'>
						{title}
					</div>
					<p
						className='group-hover:text-white/70
            line-clamp-2
            text-sm
            leading-snug
            text-white/40
          '
					>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})

ListItem.displayName = 'ListItem'
