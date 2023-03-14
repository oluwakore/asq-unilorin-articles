import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className="max-w-7xl mx-auto">
      <Header />
      <Banner />
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
