import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Hamburger.scss'

class Hamburger extends Component {
  showSettings (event) {
    event.preventDefault();
  
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu className='mobile'>
        <a id="home" className="menu-item" href="/how-it-works">How It Works</a>
        <a id="about" className="menu-item" href="/saved-packing-lists">Saved Lists</a>
      </Menu>
    );
  }
}

export default Hamburger