import ButtonFAB from '@/components/buttonFAB'
import Card from '@/components/card'

import ItemCaixa from '@/components/itemCaixa'
import ItemTable from '@/components/itemTable'
import ItemListTodo from '@/components/itemlistTodo'
import Layout from '@/components/layout'
import TablePedidos from '@/components/tablePedidos'
import Todo from '@/components/todo'

export default function () {
	return (
		<Layout>
			<Card title='Pendencias:'>
				<ItemListTodo id='teste' content='Fazer tal coisa' />
				<ItemListTodo id='teste1' content='José tal coisa' />
				<ItemListTodo id='teste2' content='Vanusa tal coisa' />
				<ItemListTodo id='teste3' content='Julho tal coisa' />
			</Card>

			<Card title='Rafa ou Graci:'>
				<Todo />
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

			<TablePedidos title={'Pedidos'}>
				<ItemTable />
				<ItemTable />
				<ItemTable />
			</TablePedidos>

			<ButtonFAB />
		</Layout>
	)
}
