import Header from './header'

export default function Layout({ children }) {
	return (
		<div className={`flex flex-col pb-16 `}>
			<Header />
			<div className='flex flex-col p-4 relative gap-6'>{children}</div>
		</div>
	)
}
