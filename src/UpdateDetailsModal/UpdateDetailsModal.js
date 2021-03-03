import { connect } from 'react-redux'
import './UpdateDetailsModal.scss'
import React, { useState } from 'react'
import { editTripDetails } from '../actions/actions'
import { patchTripDetails } from '../apiCalls/apiCalls'
import { modalData } from './modalData.js'
import QuestionInput from '../QuestionInput/QuestionInput'

const UpdateDetailsModal = (props) => {
  const [tripDetails, setTripDetails] = useState({
    title: props.packingList.tripDetails.title,
    destination: props.packingList.tripDetails.destination,
    duration: props.packingList.tripDetails.duration
  })

  const [formValid, setFormValid] = useState(true)

  const handleChange = (event) => {
    setTripDetails({
      ...tripDetails, [event.target.name]: event.target.value
    })
  }

  const attemptSubmission = (event) => {
    event.preventDefault()
    const { title, destination, duration} = tripDetails
    if (title && destination && duration) {
      submitForm(title, destination, duration)
    } else {
      invalidateSubmission()
    }
  }

  const submitForm = (title, destination, duration) => {
    setFormValid(true)
    props.editTripDetails(title, destination, duration)
    props.closeModal()

    const updatedTripDetails = compileTripDetails()
  
    patchTripDetails(props.packingList.tripDetails.listId, updatedTripDetails)
      .catch(() => console.error)
  }

  const invalidateSubmission = () => {
    setFormValid(false)
  }
  
  const compileTripDetails = () => {
    return ({
      title: tripDetails.title, 
      destination: tripDetails.destination,
      duration: tripDetails.duration,
    })
  }

  const displayQuestionInputs = () => {
    return modalData.map(question => {
      return (
        <QuestionInput
          key={question.id}
          questionDetails={question}
          handleChange={handleChange}
          value={tripDetails[question.name]}
        />
      )
    })
  }

  return (
    <form className="updateDetailsModal">
        <div className="close-modal-btn-container">
          <button
          onClick={props.closeModal}
          className="close-modal-btn"
        >x</button>
      </div>
      {!formValid && 
      <p className="modal-invalid-msg">Please fill out all trip details before proceeding.</p>}
      <h1 className='update-details-title'>Update your Trip Details</h1>
      {displayQuestionInputs()}
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDetailsModal)