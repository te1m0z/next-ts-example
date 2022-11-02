import type { AppProps } from 'next/app'

/* Styles */
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps): JSX.Element {
    return <Component { ...pageProps } />
}

export default App