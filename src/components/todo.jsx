import ItemListTodo from './itemlistTodo'

export default function Todo() {
	return (
		<div className='flex flex-col'>
			<ItemListTodo id='rg1' content='Casa' />
			<ItemListTodo id='rg2' content='Bolo' />
			<ItemListTodo id='rg3' content='Aninha' />
			<ItemListTodo id='rg4' content='Fazer clien' />
		</div>
	)
}
