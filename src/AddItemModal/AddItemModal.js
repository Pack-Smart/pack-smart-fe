import { connect } from 'react-redux'
import './AddItemModal.scss'
import React, { useState } from 'react'
import { setCurrentList } from '../actions/actions'
import { addCustomItem, getSinglePackingList } from '../apiCalls/apiCalls'
import QuestionInput from '../QuestionInput/QuestionInput'
import { addItemData } from './addItemData'
import { compileCustomItemData } from '../utilities/utilities'

const AddItemModal = ({ closeModal, customItemCategory, packingList, setCurrentList }) => {
  const [customItem, setCustomItem] = useState({
    quantity: 0,
    name: '',
    category: customItemCategory
  })

  const [formValid, setFormValid] = useState(true)

  const handleChange = (event) => {
    setCustomItem({
      ...customItem, [event.target.name]: event.target.value
    })
  }

  const attemptSubmission = (event) => {
    event.preventDefault()
    if (customItem.name) {
      closeModal()
      let customItemData = compileCustomItemData(customItem, packingList.tripDetails.listId)
      setFormValid(true)
      addCustomItem(customItemData)
        .then(() => refreshPackingList())
        .catch(() => console.error)
    } else {
      invalidateSubmission()
    }
  }

  const refreshPackingList = () => {
    getSinglePackingList(packingList.tripDetails.listId)
    .then(data => setCurrentList(data.data.attributes))
  }

  const invalidateSubmission = () => {
    setFormValid(false)
  }

  const generateModalQuestions = () => {
    return addItemData.map(item => {
      return(
        <QuestionInput 
        key={item.id}
        questionDetails={item}
        handleChange={handleChange}
        />
      )
    })
  }

  return (
    <form className="updateDetailsModal">
        <div className="close-modal-btn-container">
          <button
          onClick={closeModal}
          className="close-modal-btn"
        >x</button>
      </div>
      {!formValid && 
      <p className="modal-invalid-msg">Please enter a custom item name.</p>}
      <h1 className='update-details-title'>Add a Custom Item for {customItemCategory}</h1>
      {generateModalQuestions()}
      <button
        className="update-trip-details-btn"
        onClick={attemptSubmission}
      >Save</button>
    </form>
  )
}

const mapStateToProps = (state) => ({
  packingList: state.packingList
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentList: data => dispatch(setCurrentList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItemModal)