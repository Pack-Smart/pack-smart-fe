import './Header.scss'
import { Link } from 'react-router-dom'
import Hamburger from '../Hamburger/Hamburger'
import { navDetails } from './headerData'

const Header = () => {

  const generateNavButtons = () => {
    return navDetails.map(navItem => {
      const { title, id, path } = navItem
      return (
        <Link key={id} className='header-btn' id={id} to={path} >
          {title}
        </Link>
      )
    })
  }

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
        </Link>
        </div>
        {generateNavButtons()}
        {/* Mobile Nav */}
        <div className='mobile'>
          <Hamburger 
            width={ 50 }
            pageWrapId={ 'header' }
            outerContainerId={ "outer-container" }
          />
        </div>
      </nav>
    </div>
  )
}

export default Header