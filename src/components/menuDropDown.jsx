import { useState } from 'react'

export default function MenuDropDown({ icon, children }) {
	const [visible, setVisible] = useState(false)
	return (
		<div className='relative '>
			<button
				onClick={() => {
					setVisible(!visible)
				}}>
				{icon}
			</button>
			<span
				className={`absolute ${
					visible ? 'block' : 'hidden'
				} z-10 right-0 border border-gray-500 rounded-lg bg-white divide-y`}>
				{children}
			</span>
		</div>
	)
}
