import { Link } from 'react-router-dom'
import './Error.scss'

const Error = (props) => {
  return(
    <section className="error-section">
      <h1>Oops! This page does not exist.</h1>
      <Link
        to="/"
        className="error-btn"
      >Return to Home</Link>
    </section>
  )
}

export default Error