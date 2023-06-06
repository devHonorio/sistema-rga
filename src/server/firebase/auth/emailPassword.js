import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { app } from '../firebaseConfig'

const auth = getAuth(app)

export function emailPassWord(email, password, route, rota) {
	createUserWithEmailAndPassword(auth, email, password)
		.then(() => {
			route(rota)
		})
		.catch((erro) => {
			if (erro.code === 'auth/email-already-in-use')
				alert('Esse email já está em uso!')
		})
	return
}

export function loginEmailPassWord(email, password, route, rota) {
	signInWithEmailAndPassword(auth, email, password)
		.then(() => {
			route(rota)
		})
		.catch((erro) => {
			if (erro.code === 'auth/wrong-password') alert('Senha incorreta¹')
		})
}
