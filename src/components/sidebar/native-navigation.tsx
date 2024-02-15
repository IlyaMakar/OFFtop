import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import CypressHomeIcon from '../icons/cypressHomeIcon'
import CypressSettingsIcon from '../icons/cypressSettingsIcon'
import CypressTrashIcon from '../icons/cypressTrashIcon'
import Settings from '../settings/settings'
import Trash from '../trash/trash'
import CypressMessageIcon from '../icons/cypressMessageIcon'

interface NativeNavigationProps {
	myWorkspaceId: string
	className?: string
}

const NativeNavigation: React.FC<NativeNavigationProps> = ({
	myWorkspaceId,
	className
}) => {
	return (
		<nav className={twMerge('my-2', className)}>
			<ul className='flex flex-col gap-2'>
				<li>
					<Link
						className='group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
          '
						href={`/dashboard/${myWorkspaceId}`}
					>
						<CypressHomeIcon />
						<span>Мои пространства</span>
					</Link>
				</li>

				<Settings>
					<li
						className='group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
            cursor-pointer
          '
					>
						<CypressSettingsIcon />
						<span>Настройки</span>
					</li>
				</Settings>

				<Trash>
					<li
						className='group/native
            flex
            text-Neutrals/neutrals-7
            transition-all
            gap-2
          '
					>
						<CypressTrashIcon />
						<span>Корзина</span>
					</li>
				</Trash>
				<Link
					className='group/native
				flex
				text-Neutrals/neutrals-7
				transition-all
				gap-2
			  '
					href={`/messengers`}
				>
					<CypressMessageIcon />
					<span>Мессенджер</span>
				</Link>
			</ul>
		</nav>
	)
}

export default NativeNavigation
