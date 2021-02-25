import './VerifyDeletionModal.scss'

const VerifyDeletionModal = ({ setVerifyDeletion, deleteItem, closeModal, categoryToDelete, itemToDelete }) => {
  return (
    <>
      <h1 className='modal-title'>Are you sure you want to delete this item from your packing list?</h1>
      <div className='modal-buttons'>
        <button className='modal-button' onClick={() => {
          deleteItem(categoryToDelete, itemToDelete)
          closeModal()
          }}>DELETE ITEM</button>
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