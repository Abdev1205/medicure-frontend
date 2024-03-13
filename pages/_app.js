import '@/styles/globals.css'
import DataProvider from '@/context/DataProvider'
import NextTopLoader from 'nextjs-toploader';


export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      {/* <NextTopLoader showSpinner={false} color="#FA2444" > */}
      <Component {...pageProps} />
      {/* </NextTopLoader> */}
    </DataProvider>
  )
}
