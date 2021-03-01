import './Hamburger.scss'
import { BiBookmarkPlus } from 'react-icons/bi'
import { GiGears } from 'react-icons/gi'
import { RiFileListLine } from 'react-icons/ri'
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

  render () {
    return (
      <Menu 
        className='mobile'
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <h2>
          <a 
            id="quiz" 
            className="menu-item" 
            href="/packing-quiz"
            onClick={() => this.closeMenu()}
          >
            <RiFileListLine 
              size={25} 
              className='burger-icon'
              color='#2d3045'
            />
              Start New List
          </a>
        </h2>
        <h2>
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
        </h2>
        <h2>
          <a 
            id="about" 
            className="menu-item" 
            href="/saved-packing-lists"
            onClick={() => this.closeMenu()}
          >
            <BiBookmarkPlus
              size={25}
              className='burger-icon'
              color='#2d3045'
            />
            Saved Lists
          </a>
        </h2>
      </Menu>
    );
  }
}

export default Hamburger