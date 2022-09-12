import MainLayoutCmp from '../components/layout/mainlayout_Cmp'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MainLayoutCmp>
        <Component {...pageProps} />
      </MainLayoutCmp>
    </div>
  )
}

export default MyApp
