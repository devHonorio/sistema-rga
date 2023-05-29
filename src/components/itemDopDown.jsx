export default function ItemDropDow({ icon, content }) {
	return (
		<button className='flex items-center  gap-1 py-1 px-2 '>
			{icon} {content}
		</button>
	)
}
