import { useState } from 'react'
import { Menu } from './icons/heroes'
import MenuItem from './menuItem'

export default function Navigation() {
	const [stateMenu, setStateMenu] = useState(false)
	let displayMenu = stateMenu ? 'flex' : 'hidden'

	return (
		<nav className='relative'>
			<button onClick={() => setStateMenu(!stateMenu)}>
				<Menu
					className={`h-6 w-6 hover:opacity-80 cursor-pointer`}
					strokeWidth={2.5}
				/>
			</button>

			<div
				className={`absolute z-10 ${displayMenu} flex-col w-32 justify-center items-center divide-y-2 gap-2 py-2 bg-white border-gray-600 border text-gray-800 rounded-lg top-7 shadow-2xl`}>
				<MenuItem href={'/'} name={'Home'} />
				<MenuItem href={'/caixa'} name={'Caixa'} />
				<MenuItem href={'/login'} name={'Login'} />
			</div>
		</nav>
	)
}
