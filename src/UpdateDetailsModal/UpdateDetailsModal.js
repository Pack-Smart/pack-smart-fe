import { connect } from 'react-redux'
import './UpdateDetailsModal.scss'
import React, { useState } from 'react'
import { editTripDetails } from '../actions/actions'

const UpdateDetailsModal = (props) => {
  const [tripDetails, setTripDetails] = useState({
    title: '',
    destination: '',
    duration: ''
  })

  const handleChange = (event) => {
    setTripDetails({
      ...tripDetails, [event.target.name]: event.target.value
    })
  }

  const submitUpdate = (event) => {
    event.preventDefault()
    props.closeModal()
    props.editTripDetails(tripDetails.title, tripDetails.destination, tripDetails.duration)
  }

  return (
    <form className="updateDetailsModal">
      <button
        onClick={props.closeModal}
      >x</button>
      <h1>Update your Trip Details</h1>
      <p>Trip Name</p>
      <input
        placeholder="i.e. Spring Break 20 08"
        name="name"
        onChange={handleChange}
        type="text"
      />
      <p>Trip Destination</p>
      <input
        placeholder="Cabo, Mexico"
        name="destination"
        onChange={handleChange}
        type="text"
      />
      <p>Number of Days</p>
      <input
        placeholder="3"
        min="1"
        name="number_of_days"
        onChange={handleChange}
        type="number"
      />
      <button
        onClick={submitUpdate}
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