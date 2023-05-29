import Card from '@/components/card'
import ItemCaixa from '@/components/itemCaixa'
import ItemTableCaixa from '@/components/itemTableCaixa'
import Layout from '@/components/layout'
import TablePedidos from '@/components/tablePedidos'

export default function Caixa() {
	return (
		<Layout>
			<Card title='Resumo do dia'>
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

			<TablePedidos title={'Caixas'}>
				<ItemTableCaixa />
				<ItemTableCaixa />
				<ItemTableCaixa />
				<ItemTableCaixa />
			</TablePedidos>
		</Layout>
	)
}
