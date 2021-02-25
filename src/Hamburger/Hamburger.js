import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { GrWorkshop } from 'react-icons/gr'
import { GiGears } from 'react-icons/gi'
import { BsBookmarkPlus } from 'react-icons/bs'
import './Hamburger.scss'

class Hamburger extends Component {

  render () {
    return (
      <Menu className='mobile'>
        <a id="home" className="menu-item" href="/how-it-works">
          <GiGears 
            size={25} 
            className='burger-icon'
            color='#2d3045'
            // filter: invert(13%) sepia(4%) saturate(6297%) hue-rotate(196deg) brightness(88%) contrast(81%);
          />
            How It Works
        </a>
        <a id="about" className="menu-item" href="/saved-packing-lists">
          <BsBookmarkPlus
            size={25}
            className='burger-icon'
            // color='#white'
            color='#2d3045'
          />
          Saved Lists
        </a>
      </Menu>
    );
  }
}

export default Hamburger