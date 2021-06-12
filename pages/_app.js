import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-theme.min.css"
import "normalize.css/normalize.css" // TODO could be removed in the future
import "animate.css" // TODO could be removed in the future
import "../styles/_app.scss"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
