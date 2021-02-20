import React, { useState } from 'react'
import './Quiz.scss'

const Quiz = (props) => {
  const [quizData, setQuizData] = useState({
    name: '',
    gender: '',
    weather: [],
    destination: '',
    number_of_days: 0,
    categories: []
  })

  const handleChange = (event) => {
    event.preventDefault()

    setQuizData({
      ...quizData, [event.target.name]: event.target.value
    })
  }

  const handleClick = (event) => {
    event.preventDefault()

    
  }

  const submitForm = () => {
    validateForm()
  }

  const validateForm =() => {

  }

  return (
    <form className="quiz-form" onSubmit={submitForm()}>
      <h1>Quiz!</h1>
      <p className="quizIntro">Answer all the questions below to get your custom packing list.</p>
      <div className="trip-name-field">
        <h2>1. Packing list name</h2>
        <input
          type="text"
          placeholder="e.g. Cancun 20 08!"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="trip-gender-field">
        <h2>2. I'm packing for:</h2>
        <button name='female' onClick={handleClick}>Female</button>
        <button name='male' onClick={handleClick}>Male</button>
        <button name='non-binary' onClick={handleClick}>Non-Binary</button>
      </div>
      <div className="trip-location-field">
        <h2>3. Going to:</h2>
        <input
          type="text"
          placeholder="e.g. Mexico"
          name="location"
        />
      </div>
      <div className="trip-duration-field">
        <h2>4. Number of days:</h2>
        <input 
          type="number"
          placeholder="e.g. 3"
          name="days"
        />
      </div>
      <div className="trip-weather-field">
        <h2>5. What will the weather be like?</h2>
        <p className="select-all-txt">(Select all that apply)</p>
        <div className="quiz-answer-btns">
          <button>Cold</button>
          <button>Cool</button>
          <button>Warm</button>
        </div>
        <div className="quiz-answer-btns">
          <button>Hot</button>
          <button>Rainy</button>
          <button>Snowy</button>
        </div>
      </div>
      <div className="trip-activities-field">
        <h2>6. What activities do you plan to do</h2>
        <p className="select-all-txt">(Select all that apply)</p>
        <div className="quiz-answer-btns">
          <button>Skiing</button>
          <button>Beach</button>
          <button>Hiking</button>
        </div>
        <div className="quiz-answer-btns">
          <button>Night Life</button>
          <button>Wedding</button>
          <button>Business</button>
        </div>
      </div>
      <button
        className="quiz-submit-btn"
      >Get My Packing List!
      </button>
    </form>
  )
}

export default Quiz