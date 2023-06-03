import { className } from '@/styles/colorsDeafalt'
import Navigation from './navigation'
import { useContext } from 'react'
import { HeaderContext } from '@/contexts/contextHeader'

export default function Header() {
	const { colors } = className
	const { namePage, setNamePage } = useContext(HeaderContext)

	return (
		<header
			className={`flex justify-between py-2 px-4 font-semibold text-white  ${colors.gradient}`}>
			<Navigation />

			<span>{namePage}</span>

			<span>Rga</span>
		</header>
	)
}
