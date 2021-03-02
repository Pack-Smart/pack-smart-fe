import './StaticItem.scss'
import { connect } from 'react-redux'
import { editPackingListItem } from '../apiCalls/apiCalls'
import { toggleIsChecked, deleteItem, editItemQuantity } from '../actions/actions'
import { HiPlus, HiMinusSm } from 'react-icons/hi'
import React, { useEffect, useState } from 'react'

const StaticItem = ({ item, category, openModal, verifyDeletion, toggleIsChecked, deleteItem, editItemQuantity }) => {
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
    const cleanQuantity = () => {
      if (newQuantity === '--') {
        return newQuantity = 0
      }
      return newQuantity
    }
    const updatedItem = {
      data: {
        items: [{
          id: item.id,
          is_checked: item.is_checked,
          quantity: cleanQuantity()
        }]
      }
    }
    
   editPackingListItem(updatedItem)
      .catch(() => console.error)
  }

  // const determineParse = (incrementDirection) => {
  //   let quantity = itemQuantity;
  //   if (itemQuantity === '--') {
  //     quantity = 0
  //   }

  //   console.log('quantity', quantity)
  //   console.log('itemQuantity', itemQuantity)
  //   if (incrementDirection === 'decrease') {
  //     updateItemQuantity(quantity - 1)
  //   } else {
  //     updateItemQuantity(quantity + 1)
  //   }
  // }

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
            placeholder={'--'}
            value={itemQuantity === 0 ? '--': itemQuantity}
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

export default connect(null, mapDispatchToProps)(StaticItem)
