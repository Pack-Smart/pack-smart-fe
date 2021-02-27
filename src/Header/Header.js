import './Header.scss'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import Hamburger from '../Hamburger/Hamburger'

const Header = (props) => {

  return(
    <div id='outer-container'>
      <nav className="header">
        <div className="side-nav">
        <Link
          to='/'
          className="header-logo-anchor"
        >
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

        {/* Mobile Nav */}
        <div className='mobile'>
          <Hamburger 
            width={ 50 }
            // customBurgerIcon={ GiHamburgerMenu }
            pageWrapId={ 'header' }
            outerContainerId={ "outer-container" }
          />
        </div>

      </nav>
    </div>
  )
}

export default Header