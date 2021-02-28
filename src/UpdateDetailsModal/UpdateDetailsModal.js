import { connect } from 'react-redux'
import './UpdateDetailsModal.scss'
import React, { useState } from 'react'
import { editTripDetails } from '../actions/actions'

const UpdateDetailsModal = (props) => {
  const [tripDetails, setTripDetails] = useState({
    title: props.packingList.tripDetails.title,
    destination: props.packingList.tripDetails.destination,
    duration: props.packingList.tripDetails.duration
  })

  const handleChange = (event) => {
    setTripDetails({
      ...tripDetails, [event.target.name]: event.target.value
    })
  }

  const submitUpdate = (event) => {
    event.preventDefault()
    props.editTripDetails(tripDetails.title, tripDetails.destination, tripDetails.duration)
    const { title, destination, duration} = tripDetails
    props.closeModal()
    props.editTripDetails(title, destination, duration)
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
        name="title"
        onChange={handleChange}
        type="text"
        value={tripDetails.title}
      />
      <p>Trip Destination</p>
      <input
        placeholder="i.e. Cabo, Mexico"
        name="destination"
        onChange={handleChange}
        type="text"
        value={tripDetails.destination}
      />
      <p>Number of Days</p>
      <input
        placeholder="i.e. 3"
        min="1"
        name="duration"
        onChange={handleChange}
        type="number"
        value={tripDetails.duration}
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