import { className } from '@/styles/colorsDeafalt'
import Navigation from './navigation'

export default function Header() {
	const { colors } = className

	return (
		<header
			className={`flex justify-between py-2 px-2 font-semibold text-white  ${colors.gradient}`}>
			<Navigation />

			<span>DashBoard</span>

			<span>Rga</span>
		</header>
	)
}
