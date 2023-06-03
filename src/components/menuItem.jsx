import { HeaderContext } from '@/contexts/contextHeader'
import Link from 'next/link'
import { useContext } from 'react'

export default function MenuItem({ className, href, namePage }) {
	const { setNamePage } = useContext(HeaderContext)

	return (
		<Link
			onClick={() => {
				setNamePage(namePage)
			}}
			href={href}
			className={` font-normal w-full text-center hover:text-purple-500 ${className}`}>
			{namePage}
		</Link>
	)
}
