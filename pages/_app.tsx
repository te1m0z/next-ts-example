import type { AppProps } from 'next/app'

/* Styles */
import '../styles/globals.css'
import Head              from 'next/head'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {

    return (
        <>
            <Head>
                <title>Next.ts Example App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Component { ...pageProps } />
        </>
    )
}

export default App