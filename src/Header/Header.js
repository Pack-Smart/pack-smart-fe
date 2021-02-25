import './Header.scss'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import Hamburger from '../Hamburger/Hamburger'
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
      <Hamburger 
        // mobile='mobile'
        width={ 50 }
        // customBurgerIcon={ GiHamburgerMenu } 
        // pageWrapId={ 'header' }
      />
    </nav>
  )
}

export default Header