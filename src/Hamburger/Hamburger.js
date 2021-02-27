import './Hamburger.scss'
import { BsBookmarkPlus } from 'react-icons/bs'
import { GiGears } from 'react-icons/gi'
import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react'

class Hamburger extends Component {

  render () {
    return (
      <Menu className='mobile'>
        <a id="home" className="menu-item" href="/how-it-works">
          <GiGears 
            size={25} 
            className='burger-icon'
            color='#2d3045'
          />
            How It Works
        </a>
        <a id="about" className="menu-item" href="/saved-packing-lists">
          <BsBookmarkPlus
            size={25}
            className='burger-icon'
            color='#2d3045'
          />
          Saved Lists
        </a>
      </Menu>
    );
  }
}

export default Hamburger