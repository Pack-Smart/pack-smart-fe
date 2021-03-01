import './Hamburger.scss'
import { burgerMenuData } from './mobileMenuData'
import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react'

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

  generateBurgerMenu = () => {
    return burgerMenuData.map(menuItem => {
      return (
        <h2>
          <a 
            id={menuItem.id}
            className='menu-item' 
            href={menuItem.href}
            onClick={() => this.closeMenu()}
          >
            {menuItem.icon}
            {menuItem.text}
          </a>
        </h2>
      )
    })
  }

  render () {
    return (
      <Menu 
        className='mobile'
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        {this.generateBurgerMenu()}
      </Menu>
    );
  }
}

export default Hamburger