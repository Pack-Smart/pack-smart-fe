import './Header.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return(
    <nav className="header">
      <div className="side-nav">
      <Link
        to='/'
        className="header-logo-anchor"
      >
        {/* <img
          src={cases}
          alt="pack smart logo"
          className="header-logo" 
        /> */}
        <p className='letter-p'>P</p>
        <p className='letter-s'>S</p>
        <h1 className='pack-smart-title'>Pack Smart</h1>
      </Link>
      </div>
      <Link
        className="header-btn"
        to="/how-it-works"
      >How It Works
      </Link>
      <Link
        className="header-btn"
        to="/saved-packing-lists"
      >Saved Lists
      </Link>
    </nav>
  )
}

export default Header