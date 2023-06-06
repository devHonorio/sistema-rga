export default function Input({
	type = 'text',
	id,
	label,
	placeholder = '',
	className,
	value,
	onChange,
}) {
	return (
		<div className='flex flex-col gap-1 items-start'>
			<label htmlFor={id} className='font-bold  cursor-pointer'>
				{!!label && label + ':'}
			</label>
			<input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				type={type}
				id={id}
				placeholder={placeholder}
				className={`rounded-md text-base px-3 py-2 text-gray-700 font-semibold w-full ${className} `}
			/>
		</div>
	)
}
