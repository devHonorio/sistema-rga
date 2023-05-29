import Link from 'next/link'

export default function MenuItem({ className, href, name }) {
	return (
		<Link
			href={href}
			className={` font-normal w-full text-center hover:text-purple-500 ${className}`}>
			{name}
		</Link>
	)
}
