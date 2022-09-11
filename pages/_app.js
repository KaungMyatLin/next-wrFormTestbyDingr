import Navigation from '../components/ui/Navigation'
import classes from '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={classes.app}>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </div>
  )
}

export default MyApp
