import { className } from '@/styles/colorsDeafalt'
import { Plus } from './icons/heroes'
import ItemButtonFAB from './itemButtonFAB'

export default function ButtonFAB() {
	const { colors } = className

	return (
		<div className='bottom-5 right-5 bg-fixed fixed flex flex-col items-center gap-2  '>
			<ItemButtonFAB />

			<button
				className={` z-10 flex justify-center items-center w-16 h-16 rounded-full ${colors.gradientContraste}`}>
				<Plus className={`h-6 w-6 text-white`} strokeWidth={2.5} />
			</button>
		</div>
	)
}
