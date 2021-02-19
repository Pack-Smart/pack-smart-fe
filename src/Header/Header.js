import './Header.scss'
import { Link } from 'react-router-dom'
import cases from './cases.png'

const Header = (props) => {
  return(
    <nav className="header">
      <Link
        to='/'
        className="header-logo-anchor"
      >
        <img
          src={cases}
          alt="pack smart logo"
          className="header-logo" 
        />
      </Link>
      <Link
        className="header-btn"
        to="/saved-packing-lists"
      >Saved Packing Lists
      </Link>
    </nav>
  )
}

export default Header