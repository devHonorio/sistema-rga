import CreateAccount from '@/components/createAccount'
import LoginComponent from '@/components/login'
import { useState } from 'react'

export default function Login() {
	const [login, setLogin] = useState(true)
	return (
		<>
			{login && <LoginComponent login={setLogin} />}
			{!login && <CreateAccount login={setLogin} />}
		</>
	)
}
