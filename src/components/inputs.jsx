export default function Input({
	type = 'text',
	id,
	label,
	placeholder = '',
	className,
}) {
	return (
		<div className='flex flex-col gap-1 items-start'>
			<label htmlFor={id} className='font-bold  cursor-pointer'>
				{!!label && label + ':'}
			</label>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				className={`rounded-md text-base px-2 py-1 text-gray-700 font-semibold ${className} `}
			/>
		</div>
	)
}
