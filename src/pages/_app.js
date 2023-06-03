import Container from '@/contexts/contextHeader'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	)
}
