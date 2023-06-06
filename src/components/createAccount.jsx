import { useInput } from '@/hooks/login/inputs'
import { className } from '@/styles/colorsDeafalt'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Input from './inputs'
import Button from './buttonDefalt'
import { HeaderContext } from '@/contexts/contextHeader'
import { emailPassWord } from '@/server/firebase/auth/emailPassword'

export default function CreateAccount({ login }) {
	const { colors } = className
	const { setNamePage } = useContext(HeaderContext)
	const { email, password, setEmail, setPasswoed } = useInput()
	const router = useRouter()
	return (
		<div
			className={`flex h-screen justify-center items-center flex-col
                  text-white  ${colors.gradient}`}>
			<h1 className='font-extrabold text-4xl mb-14'>
				Sitema <span className='ml-[-8px] text-fuchsia-500'>Controle</span>
			</h1>

			<div className='flex flex-col gap-3'>
				<Input
					value={email}
					onChange={setEmail}
					label={'Email'}
					type='email'
					placeholder='jose@jose.com'
					id='email'
				/>
				<Input
					value={password}
					onChange={setPasswoed}
					label={'Senha'}
					type='password'
					id='password'
					placeholder='jose123'
				/>

				<Button
					onClick={() => {
						emailPassWord(email, password, router.push, '/')
						setNamePage('Home')
					}}
					label={'Criar conta'}
					className='mt-2'
				/>
				<button
					onClick={() => login(true)}
					className={'text-xs text-blue-300 underline'}>
					Já tem conta? entrar agora!
				</button>
			</div>
		</div>
	)
}
