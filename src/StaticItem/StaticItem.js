import './StaticItem.scss'
import { connect } from 'react-redux'
import { editPackingListItem } from '../apiCalls/apiCalls'
import { toggleIsChecked, deleteItem, editItemQuantity } from '../actions/actions'
import { HiPlus, HiMinusSm } from 'react-icons/hi'
import React, { useEffect, useState } from 'react'

const StaticItem = ({ item, category, quantity, openModal, verifyDeletion, toggleIsChecked, deleteItem, editItemQuantity }) => {
  const [itemQuantity, setItemQuantity] = useState(item.quantity)
  
  useEffect(() => {
    editItemQuantity(category, item.name, itemQuantity)
  }, [itemQuantity])

  const determineModalOpen = (category, name, itemId, itemItemId) => {
    if (verifyDeletion === true) {
      openModal(category, name, itemId, itemItemId)
    } else {
      deleteItem(category, item.name)
    }
  }

  const updateListItem = (newQuantity) => {
    let updatedItem = {
      data: {
        item: [{
          id: item.id,
          is_checked: item.is_checked,
          quantity: newQuantity
        }]
      }
    }
    if (item.id === item.item_id) {
      updatedItem.data.item[0].category = category
    }
  
    editPackingListItem(updatedItem)
      .catch(() => console.error)
  }

  const updateItemQuantity = (newNum) => {
    if (newNum >= 0) {
      setItemQuantity(newNum)
      updateListItem(newNum)
    }
  }
  
  return (
    <article className='static-item'>  
      <div className='quantity-container'>
      <HiMinusSm className='plus-minus-btn' size={40} onClick={() => updateItemQuantity(itemQuantity - 1)}/>
          <input
            type='number'
            name='quantity'
            className='quantity-input'
            aria-label='item quantity'
            role='quantity input'
            placeholder={quantity}
            value={itemQuantity}
            disabled
          />
        <HiPlus className='plus-minus-btn' size={40} onClick={() => updateItemQuantity(itemQuantity + 1)}/>
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
          determineModalOpen(category, item.name, item.id, item.item_id)}}>
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

export default connect(null, mapDispatchToProps)(StaticItem)
