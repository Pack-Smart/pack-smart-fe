import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toggleIsChecked, deleteItem } from '../actions/actions'
import './StaticItem.scss'

const StaticItem = ({ item, category, quantity, openModal, verifyDeletion, toggleIsChecked, deleteItem }) => {
  const determineModalOpen = (category, name) => {
    if (verifyDeletion === true) {
      openModal(category, name)
    } else {
      deleteItem(category, item.name)
    }
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
          determineModalOpen(category, item.name)}}>
            X
        </button>
      </div>
    </article>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleIsChecked: (category, name, status) => dispatch(toggleIsChecked(category, name, status)),
  deleteItem: (category, name) => dispatch(deleteItem(category, name))  
})

export default connect(mapDispatchToProps, {toggleIsChecked, deleteItem})(StaticItem)