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
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    event.preventDefault()

    setQuizData({
      ...quizData, [event.target.name]: event.target.value
    })
  }

  const handleClick = (event, type) => {
    event.preventDefault()

    const name = event.target.name

    type === 'gender' ? updateGender(name) : updateMultipleSelections(type, name)
  }

  const updateGender = (name) => {
    setQuizData({
      ...quizData, gender: name
    })
  }

  const updateMultipleSelections = (type, name) => {
    if (quizData[type].includes(name)) {
      setQuizData({
        ...quizData, [type]: quizData[type].filter(property => property !== name)
      })
    } else {
      setQuizData({
        ...quizData, [type]: [...quizData[type], name]
      })
    }
  }

  const submitForm = () => {
  }

  const validateForm = () => {
    const quizValues = Object.values(quizData)

  
    if (Object.values(quizData)) {
      console.log('empty string')
    }

    submitForm()
  }

  return (
    <form className="quiz-form" onSubmit={validateForm()}>
      <h1>Quiz!</h1>
      <p className="quizIntro">Answer all the questions below to get your custom packing list.</p>
      <div className="trip-name-field">
        <h2>1. Packing list name</h2>
        <input
          type="text"
          placeholder="e.g. Cancun 20 08!"
          name="name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="trip-gender-field">
        <h2>2. I'm packing for:</h2>
        <button name='female' onClick={(event) => handleClick(event, 'gender')}>Female</button>
        <button name='male' onClick={(event) => handleClick(event, 'gender')}>Male</button>
        <button name='non-binary' onClick={(event) => handleClick(event, 'gender')}>Non-Binary</button>
      </div>
      <div className="trip-location-field">
        <h2>3. Going to:</h2>
        <input
          type="text"
          placeholder="e.g. Mexico"
          name="destination"
          onChange={handleChange}
        />
      </div>
      <div className="trip-duration-field">
        <h2>4. Number of days:</h2>
        <input 
          type="number"
          placeholder="e.g. 3"
          name="days"
          onChange={handleChange}
        />
      </div>
      <div className="trip-weather-field">
        <h2>5. What will the weather be like?</h2>
        <p className="select-all-txt">(Select all that apply)</p>
        <div className="quiz-answer-btns">
          <button name='cold' onClick={(event) => handleClick(event, 'weather')}>Cold</button>
          <button name='cool' onClick={(event) => handleClick(event, 'weather')}>Cool</button>
          <button name='warm' onClick={(event) => handleClick(event, 'weather')}>Warm</button>
        </div>
        <div className="quiz-answer-btns">
          <button name='hot' onClick={(event) => handleClick(event, 'weather')}>Hot</button>
          <button name='rainy' onClick={(event) => handleClick(event, 'weather')}>Rainy</button>
          <button name='snowy' onClick={(event) => handleClick(event, 'weather')}>Snowy</button>
        </div>
      </div>
      <div className="trip-activities-field">
        <h2>6. What activities do you plan to do</h2>
        <p className="select-all-txt">(Select all that apply)</p>
        <div className="quiz-answer-btns">
          <button name='skiing' onClick={(event) => handleClick(event, 'weather')}>Skiing</button>
          <button name='beach' onClick={(event) => handleClick(event, 'weather')}>Beach</button>
          <button name='hiking' onClick={(event) => handleClick(event, 'weather')}>Hiking</button>
        </div>
        <div className="quiz-answer-btns">
          <button name='night life' onClick={(event) => handleClick(event, 'weather')}>Night Life</button>
          <button name='wedding' onClick={(event) => handleClick(event, 'weather')}>Wedding</button>
          <button name='business' onClick={(event) => handleClick(event, 'weather')}>Business</button>
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