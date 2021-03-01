import './StaticItem.scss'
import { connect } from 'react-redux'
import { editPackingListItem } from '../apiCalls'
import { toggleIsChecked, deleteItem, editItemQuantity } from '../actions/actions'
import React, { useEffect, useState } from 'react'

const StaticItem = ({ item, category, quantity, openModal, verifyDeletion, toggleIsChecked, deleteItem, editItemQuantity }) => {
  const [itemQuantity, setItemQuantity] = useState(item.quantity)
  
  useEffect(() => {
    editItemQuantity(category, item.name, itemQuantity)
  }, [itemQuantity])

  const determineModalOpen = (category, name, itemId) => {
    if (verifyDeletion === true) {
      openModal(category, name, itemId)
    } else {
      deleteItem(category, item.name)
    }
  }

  const updateListItem = (newQuantity) => {
    const updatedItem = {
      "data": {
        "items": [{
          id: item.id,
          is_checked: item.is_checked,
          quantity: newQuantity
        }]
      }
    }
    
   editPackingListItem(updatedItem)
      .catch(() => console.error)
  }

  const updateItemQuantity = (event) => {
    setItemQuantity(event.target.value)
    updateListItem(event.target.value)
  }
  
  return (
    <article className='static-item'>  
      <div className='quantity-container'>
        <input
          type='number'
          name='quantity'
          className='quantity-input'
          aria-label='item quantity'
          role='quantity input'
          placeholder={quantity}
          min='0'
          onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
          value={itemQuantity}
          onChange={updateItemQuantity}
        />
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
            toggleIsChecked(category, item.name, item.is_checked)
            updateListItem() 
          }}
          checked={item.is_checked}
        />
      </div>
      <div className='delete'>
        <button className='delete-item' onClick={() => {
          determineModalOpen(category, item.name, item.id)}}>
            X
        </button>
      </div>
    </article>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleIsChecked: (category, name, status) => dispatch(toggleIsChecked(category, name, status)),
  deleteItem: (category, name) => dispatch(deleteItem(category, name)),
  editItemQuantity: (category, name, quantity) => dispatch(editItemQuantity(category, name, quantity))
})

export default connect(mapDispatchToProps, { toggleIsChecked, deleteItem, editItemQuantity })(StaticItem)
