import './VerifyDeletionModal.scss'
import { deleteSingleItem } from '../apiCalls/apiCalls'

const VerifyDeletionModal = ({ setVerifyDeletion, deleteItem, closeModal, itemToDelete, categoryToDelete }) => {
  const compileDeletionData = () => {
    let itemData = { data: { item: { id: itemToDelete.id } }}
    if (itemToDelete.item_id === itemToDelete.id) {
      itemData.data.item.category = categoryToDelete
    }
    return itemData
  }

  const determineItemToDelete = () => {
    if (categoryToDelete === 'list') {
      deleteItem(itemToDelete)
    } else {
      deleteItem(itemToDelete.category, itemToDelete.item)
      const deletionData = compileDeletionData()
      deleteSingleItem(deletionData)
        .catch(() => console.error)
    }
  }

  const determineTitleString = () => {
    if (categoryToDelete === 'list') {
      return 'this list?'
    } else {
      return 'this item from your packing list?'
    }
  }

  return (
    <>
      <h1 className='modal-title'>Are you sure you want to delete {determineTitleString()}</h1>
      <div className='modal-buttons'>
        <button className='modal-button' 
          id='delete-list-btn'
          onClick={() => {
          determineItemToDelete()
          closeModal()
          }}>DELETE</button>
        <button className='modal-button' onClick={() => closeModal()}>
          No, take me back!
        </button>
      </div>
      <div className='checkbox-question'>
        <input
          type='checkbox'
          name='verify-deletion'
          aria-label='verify-deletion-checkbox'
          role='checkbox'
          onChange={() => {
            setVerifyDeletion(false)}
        }/>
        <label forhtml='verify-deletion' className='checkbox-text'>
          Please don't show me this message again.
        </label>
      </div>
    </>
  )
}

export default VerifyDeletionModal
