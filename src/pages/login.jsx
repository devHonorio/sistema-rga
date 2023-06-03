import Button from '@/components/buttonDefalt'
import Input from '@/components/inputs'
import { HeaderContext } from '@/contexts/contextHeader'
import { className } from '@/styles/colorsDeafalt'
import { useRouter } from 'next/router'
import { useContext } from 'react'

const { colors } = className

export default function Login() {
	const router = useRouter()
	const { setNamePage } = useContext(HeaderContext)
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

				<Button
					onClick={() => {
						setNamePage('Home')
						router.push('/')
					}}
					label={'Entrar'}
					className='mt-2'
				/>
			</div>
		</div>
	)
}
