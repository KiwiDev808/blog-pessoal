import { AppProps } from 'next/app'
import 'normalize.css'
import '../../public/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
