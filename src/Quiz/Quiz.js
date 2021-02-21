import React, { useState } from 'react'
import MultipleChoice from '../MultipleChoice/MultipleChoice'
import { quizDetails } from './quizDetails.js'
import './Quiz.scss'

const Quiz = (props) => {
  const [quizData, setQuizData] = useState({
    name: '',
    gender: '',
    weather: [],
    destination: '',
    number_of_days: "",
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

  const validateForm = (event) => {
    event.preventDefault()

    const formStatus = Object.values(quizData).reduce((status, value) => {
      if (!value.length) {
        status = true
      }
      return status
    }, false)
    formStatus ? setError(true) : submitForm()
  }

  const submitForm = () => {
    setError(false)
  }

  const generateQuizQuestions = () => {
    return quizDetails.map(question => {
      if (question.type === 'MultipleChoice') {
        return generateMultipleChoice(question)
      }
    })
  }

  const generateMultipleChoice = (question) => {
    return (
      <MultipleChoice
        key={question.id}
        questionDetails={question}
        handleClick={handleClick}
      />  
    )
  }

  return (
    <form className="quiz-form">
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
          name="number_of_days"
          onChange={handleChange}
          min="1"
        />
      </div>
      
      {generateQuizQuestions()}
          
      <button
        className="quiz-submit-btn"
        onClick={validateForm}
      >Get My Packing List!
      </button>
      {error && <h3 className="invalid-message">Please answer all the questions in the quiz before proceeding.</h3>}
    </form>
  )
}

export default Quiz