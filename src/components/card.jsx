import { className } from '@/styles/colorsDeafalt'

const { shadowStyles } = className

export default function Card({ title = '', children }) {
	return (
		<div className='p-4 flex-1'>
			<div
				className={`  bg-indigo-50 p-5 rounded-2xl ${shadowStyles.shadow} ${shadowStyles.shadowColor} font-semibold`}>
				{title}
				<ul className=' flex flex-col pl-4 '>{children}</ul>
			</div>
		</div>
	)
}
