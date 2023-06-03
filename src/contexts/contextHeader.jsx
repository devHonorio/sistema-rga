import { createContext, useState } from 'react'

export const HeaderContext = createContext()

export default function Container({ children }) {
	const [namePage, setNamePage] = useState('Home')
	const testeState = { namePage, setNamePage }
	return (
		<HeaderContext.Provider value={testeState}>
			{children}
		</HeaderContext.Provider>
	)
}
