import '@/styles/globals.css'
import '@/styles/josefin-fonts.css'
import '@/styles/main.css'
import '@/styles/category.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
