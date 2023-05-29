import ItemTable from './itemTable'

export default function TablePedidos({ title }) {
	return (
		<div>
			<h2 className='py-4 text-lg font-semibold'>{title}</h2>

			<ul className='  rounded-2xl border bg-gray-50 border-gray-400 divide-y'>
				<ItemTable />
				<ItemTable />
				<ItemTable />
			</ul>
		</div>
	)
}
