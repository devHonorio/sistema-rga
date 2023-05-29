import { Editar, Lixeira, PConlcuido, PontinhosV } from './icons/heroes'
import ItemDropDow from './itemDopDown'
import MenuDropDown from './menuDropDown'

export default function ItemTable() {
	return (
		<li className='flex items-center justify-between py-4 px-4'>
			<PConlcuido className={`w-5 h-5`} strokeWidth={2} />
			<span>1</span>
			<span>Vanusa Pereira</span>
			<span>R$ 136,50</span>
			<MenuDropDown
				visible={() => {}}
				icon={<PontinhosV className={`h-5 w-5`} strokeWidth={2} />}>
				<ItemDropDow
					content='Editar'
					icon={<Editar strokeWidth={1.5} className={`h-4 w-4`} />}
				/>
				<ItemDropDow
					content='Excluir'
					icon={<Lixeira strokeWidth={1.5} className={`h-4 w-4`} />}
				/>
			</MenuDropDown>
		</li>
	)
}
