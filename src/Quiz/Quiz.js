import React, { useState } from 'react'
import MultipleChoice from '../MultipleChoice/MultipleChoice'
import QuestionInput from '../QuestionInput/QuestionInput'
import { quizDetails } from './quizDetails.js'
import './Quiz.scss'
import { getPackingListData } from '../apiCalls.js'
import { connect } from 'react-redux'
import { saveCurrentList } from '../actions/actions'

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
    const modifyWeatherData = quizData.weather.map(weather => {
      return `%${weather}%`
    })

    const submissionData = {
      data: {
        id: 0,
        type: 'survey',
        attributes: {
          gender: ['All', quizData.gender],
          weather: ['All', ...modifyWeatherData],
          tripDetails: {
            title: quizData.name,
            destination: quizData.destination,
            number_of_days: quizData.number_of_days,
          },
          categories: [
            'Accessories', 
            'Clothing', 
            'Essentials', 
            'Toiletries', 
            'Misc.',
            ...quizData.categories
          ]
        }
      }
    }

    getPackingListData(submissionData)
    .then(data => props.saveCurrentList(data.data.attributes))
    .catch(error => console.log(error))
    props.history.push('/packing-list')
  }

  const generateQuizQuestions = () => {
    return quizDetails.map(question => {
      if (question.type === 'MultipleChoice') {
        return generateMultipleChoice(question)
      } else {
        return generateQuestionInput(question)
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

  const generateQuestionInput = (question) => {
    return (
      <QuestionInput 
        key={question.id}
        questionDetails={question}
        handleChange={handleChange}
      />
    )
  }

  return (
    <form className="quiz-form">
      <h1>Quiz!</h1>
      <p className="quizIntro">Answer all the questions below to get your custom packing list.</p>
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

const mapDispatchToProps = (dispatch) => ({
  saveCurrentList: data => dispatch(saveCurrentList(data))
})

export default connect(mapDispatchToProps, {saveCurrentList})(Quiz)

