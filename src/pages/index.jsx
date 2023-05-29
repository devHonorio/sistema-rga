import Card from '@/components/card'
import Header from '@/components/header'
import ItemCaixa from '@/components/itemCaixa'
import ItemListTodo from '@/components/itemlistTodo'
import TablePedidos from '@/components/tablePedidos'

export default function () {
	return (
		<div className={`flex flex-col `}>
			<Header />
			<div className='p-3'>
				<Card title='Pendencias:'>
					<ItemListTodo id='teste' content='Fazer tal coisa' />
					<ItemListTodo id='teste1' content='José tal coisa' />
					<ItemListTodo id='teste2' content='Vanusa tal coisa' />
					<ItemListTodo id='teste3' content='Julho tal coisa' />
				</Card>

				<Card title='Rafa ou Graci:'>
					<ItemListTodo id='rg1' content='Casa' />
					<ItemListTodo id='rg2' content='Bolo' />
					<ItemListTodo id='rg3' content='Aninha' />
					<ItemListTodo id='rg4' content='Fazer clien' />
				</Card>
				<Card title='Caixa:'>
					<ItemCaixa
						type={'Dinheiro'}
						value={2321.89}
						className={`text-green-600 font-black text-lg`}
					/>
					<ItemCaixa
						type={'Cartões'}
						className={`text-gray-600`}
						value={345.56}
					/>
					<ItemCaixa type={'Pix'} className={`text-gray-600`} value={721.67} />
				</Card>

				<TablePedidos title={'Pedidos'} />
			</div>
		</div>
	)
}
