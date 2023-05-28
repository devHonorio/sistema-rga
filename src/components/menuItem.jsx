export default function MenuItem({ className }) {
	return (
		<a
			href='#'
			className={` font-normal w-full text-center hover:text-purple-500 ${className}`}>
			Menu item
		</a>
	)
}
