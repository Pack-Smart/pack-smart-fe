import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { GiGears } from 'react-icons/gi'
import { BsBookmarkPlus } from 'react-icons/bs'
import './Hamburger.scss'

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: !state.menuOpen})  
  }
  
  closeMenu () {
    this.setState({menuOpen: false})
  }

  render () {
    return (
      <Menu 
        className='mobile'
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <a 
          id="home" 
          className="menu-item" 
          href="/how-it-works"
          onClick={() => this.closeMenu()}
        >
          <GiGears 
            size={25} 
            className='burger-icon'
            color='#2d3045'
          />
            How It Works
        </a>
        <a 
          id="about" 
          className="menu-item" 
          href="/saved-packing-lists"
          onClick={() => this.closeMenu()}
        >
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