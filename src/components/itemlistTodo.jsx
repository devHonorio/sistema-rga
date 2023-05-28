import { className } from '@/styles/colorsDeafalt'
import { useState } from 'react'
import { Check } from './icons/heroes'

export default function ItemListTodo({ content = '', id = '' }) {
	const { colors } = className
	const [stateItemList, setStateItemList] = useState(false)

	const bgCheck = stateItemList ? colors.gradientContraste : 'bg-white'
	return (
		<li
			className={` font-normal ${stateItemList ? 'order-last' : 'order-none'}`}>
			<input
				type='checkbox'
				name=''
				value={stateItemList}
				onClick={(e) => {
					setStateItemList(e.target.checked)
					console.log(stateItemList)
				}}
				id={id}
				className='hidden'
			/>

			<label
				className={`flex items-center gap-2 py-1 ${
					!stateItemList ? 'normal-case' : 'line-through '
				}`}
				htmlFor={id}>
				<div
					className={`flex justify-center items-center h-5 w-5   rounded-md ${bgCheck}`}>
					<Check
						className={`h-3 w-3 text-white ${
							stateItemList ? 'block' : 'hidden'
						}`}
						strokeWidth={4}
					/>
				</div>
				{content}
			</label>
			{stateItemList}
		</li>
	)
}
