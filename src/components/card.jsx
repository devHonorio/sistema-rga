import { className } from '@/styles/colorsDeafalt'

const { shadowStyles } = className

export default function Card({ title = '', children }) {
	return (
		<div
			className={` border border-gray-800  bg-gray-100 p-5 rounded-2xl ${shadowStyles.shadow} ${shadowStyles.shadowColor} font-semibold`}>
			{title}
			<ul className=' flex flex-col pl-4 '>{children}</ul>
		</div>
	)
}
