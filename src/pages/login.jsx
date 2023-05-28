import Button from '@/components/buttonDefalt'
import Input from '@/components/inputs'
import { className } from '@/styles/colorsDeafalt'

const { colors } = className

export default function Login() {
	return (
		<div
			className={`flex h-screen justify-center items-center flex-col
                  text-white  ${colors.gradient}`}>
			<h1 className='font-extrabold text-4xl mb-14'>
				Sitema <span className='ml-[-8px] text-fuchsia-500'>Controle</span>
			</h1>

			<div className='flex flex-col gap-3'>
				<Input
					label={'Email'}
					type='email'
					placeholder='jose@jose.com'
					id='email'
				/>
				<Input
					label={'Senha'}
					type='password'
					id='password'
					placeholder='jose123'
				/>

				<Button label={'Entrar'} className='mt-2' />
			</div>
		</div>
	)
}
