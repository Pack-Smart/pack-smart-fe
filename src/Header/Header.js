import './Header.scss'
import { Link } from 'react-router-dom'
import cases from './cases.png'

const Header = (props) => {
  return(
    <nav className="header">
      <div className="side-nav">
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
      <h1 className='pack-smart-title'>Pack Smart</h1>
      </div>
      <Link
        className="header-btn"
        to="/saved-packing-lists"
      >Saved Packing Lists
      </Link>
    </nav>
  )
}

export default Header