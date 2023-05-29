import { PontinhosV } from './icons/heroes'
import ItemDropDow from './itemDopDown'
import MenuDropDown from './menuDropDown'

export default function ItemTableCaixa({}) {
	return (
		<div className='flex items-center justify-between py-4 px-4'>
			<span>1</span>
			<span>31/05/2023</span>
			<span>R$ 7.987,67</span>

			<MenuDropDown icon={<PontinhosV className={`h-5 w-5`} strokeWidth={2} />}>
				<ItemDropDow content={'Teste'} />
			</MenuDropDown>
		</div>
	)
}
