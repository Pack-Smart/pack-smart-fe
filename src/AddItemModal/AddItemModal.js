import { connect } from 'react-redux'
import './AddItemModal.scss'
import React, { useState } from 'react'
import { editTripDetails } from '../actions/actions'
import { patchTripDetails } from '../apiCalls/apiCalls'
import QuestionInput from '../QuestionInput/QuestionInput'
import { addItemData } from './addItemData'

const AddItemModal = ({ closeModal, customItemCategory }) => {
  const [customItem, setCustomItem] = useState({
    id: '',
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
      console.log(customItem)
      // submitForm(customItem)

      // TODO: data needed for adding a custom item 
      //{
      //     "data": {
      //       "type": "custom item",
      //       "attributes": {
      //           "item": "PS5",
      //           "quantity": 1,
      //           "category": "video games",
      //           "packing_list_id": 1 ***will need to pass through props???**
      //       }
      //   }
      // }

      // TODO: custom item endpoint:  /api/v1/custom_item/new
      // TODO: add function to utility file to clean the data



    } else {
      invalidateSubmission()
    }
  }

  // const submitForm = (title, destination, duration) => {
  //   setFormValid(true)
  //   props.editTripDetails(title, destination, duration)
  //   props.closeModal()

  //   const updatedTripDetails = compileTripDetails()
  
  //   patchTripDetails(props.packingList.tripDetails.listId, updatedTripDetails)
  //     .catch(() => console.error)
  // }

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
  packingList: state.packingList,
  userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  editTripDetails: (title, destination, duration) => dispatch(editTripDetails(title, destination, duration))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItemModal)