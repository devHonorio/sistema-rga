import { useState } from 'react'

export function useInput() {
	const [password, setPasswoed] = useState('')
	const [email, setEmail] = useState('')

	return {
		email,
		password,
		setEmail,
		setPasswoed,
	}
}
