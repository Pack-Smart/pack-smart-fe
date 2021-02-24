import React, { useState } from 'react'
import MultipleChoice from '../MultipleChoice/MultipleChoice'
import QuestionInput from '../QuestionInput/QuestionInput'
import { quizDetails } from './quizDetails.js'
import './Quiz.scss'
import { getPackingListData } from '../apiCalls.js'
import { connect } from 'react-redux'
import { setCurrentList } from '../actions/actions'

const Quiz = (props) => {
  const [quizData, setQuizData] = useState({
    name: '',
    gender: '',
    weather: [],
    destination: '',
    number_of_days: '',
    categories: []
  })
  const [error, setError] = useState(false)

  const handleChange = (event) => {
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
    const valuesToCheck = compileRequiredList()
    const formStatus = valuesToCheck.reduce((status, value) => {
      if (!value.length) {
        status = true
      }
      return status
    }, false)
    formStatus ? setError(true) : submitForm()
  }

  const compileRequiredList = () => {
    const { name, weather, gender, destination, number_of_days } = quizData
    return ([
      name, 
      weather, 
      gender, 
      destination,
      number_of_days
    ])
  }

  const submitForm = () => {
    setError(false)
    const submissionData = compileSubmissionData()
    getPackingListData(submissionData)
      .then(data => props.setCurrentList(data.data.attributes))
      .catch(error => console.log(error))
    props.history.push('/packing-list')
  }

  const compileSubmissionData = () => {
    const modifyWeatherData = quizData.weather.map(weather => {
      return `%${weather}%`
    })
    return ({
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
            //TODO lets put a packing list ID here
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
    })
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
      {error && <h3 className="invalid-message">Please answer all the questions in the quiz before proceeding.</h3>}
      <h1>Quiz!</h1>
      {error && window.scrollTo(0,0)} 
      <p className="quizIntro">Answer the required questions below to get your custom packing list.</p>
      {generateQuizQuestions()}  
      <button
        className="quiz-submit-btn"
        onClick={validateForm}
      >Get My Packing List!
      </button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentList: data => dispatch(setCurrentList(data))
})

export default connect(mapDispatchToProps, {setCurrentList})(Quiz)