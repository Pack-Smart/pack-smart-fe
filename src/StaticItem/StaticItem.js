import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toggleIsChecked } from '../actions/actions'
import './StaticItem.scss'

const StaticItem = ({ item, category, quantity, openModal, toggleIsChecked }) => {
  const [areYouSure, setAreYouSure] = useState(false)

  const verifyDeletion = (category, name) => {
    openModal(category, name)
  }
  
  return (
    <article className='static-item'>  
      <div className='quantity-container'>
        {quantity}
      </div>
      <div className='item-box'>
        <p>{item.name}</p>
      </div>
      <div className='input-container'> 
        <input
          type='checkbox' 
          name='checkbox' 
          aria-label='item checkbox'
          role='checkbox'
          onChange={() => {
            toggleIsChecked(category, item.name, item.is_checked)} 
          }
          checked={item.is_checked}
        />
      </div>
      <div className='delete'>
        <button className='delete-item' onClick={() => {
          verifyDeletion(category, item.name)}}>
            X
        </button>
      </div>

    </article>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleIsChecked: (category, name, status) => dispatch(toggleIsChecked(category, name, status)), 
})

export default connect(mapDispatchToProps, {toggleIsChecked})(StaticItem)