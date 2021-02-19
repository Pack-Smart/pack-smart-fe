import './Header.scss'
import { Link } from 'react-router-dom'
import cases from './cases.png'

const Header = (props) => {
  return(
    <nav className="header">
      <Link
        to='/'
      >
        <img
          src={cases}
          alt="pack smart logo"
          className="header-logo" 
        />
      </Link>
      <Link
        className="header-btn-anchor"
        to="/saved-packing-lists"
      >
        <button
          className="header-btn"
        >Saved Packing Lists</button>
      </Link>
    </nav>
  )
}

export default Header