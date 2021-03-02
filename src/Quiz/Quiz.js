import { connect } from 'react-redux'
import React, { useState } from 'react'

// UI Imports
import './Quiz.scss'

// App Imports
import { getPackingListData, getSinglePackingList, saveNewPackingList } from '../apiCalls.js'
import { quizDetails } from './quizDetails.js'
import { setCurrentList } from '../actions/actions'
import MultipleChoice from '../MultipleChoice/MultipleChoice'
import QuestionInput from '../QuestionInput/QuestionInput'
import { useHistory } from 'react-router-dom'

const Quiz = (props) => {
  let history = useHistory()
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
    setError(false)
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
    .then(data => {
      submitNewPackingList(data.data.attributes)
    })
    .then(() => props.history.push('/packing-list'))
    .catch(() => console.error)
  }

  const submitNewPackingList = (packingListData) => {
    let listToSave = compilePackingList(packingListData)

    saveNewPackingList(listToSave)
      .then(data => updateCurrentListInStore(data.data.listId))
      .catch(() => console.error)
  }

  const updateCurrentListInStore = (listId) => {
    // const currentListUserDetails = {
    //   title: quizData.name,
    //   destination: quizData.destination,
    //   duration: quizData.number_of_days
    // }

    getSinglePackingList(listId)
      .then(data => {
        console.log('data', data)
        props.setCurrentList(data.data.attributes)
      })
      .catch(() => console.error)

  }

  const compilePackingList = (packingListData) => {
    const items = Object.values(packingListData.categories).flat()
    console.log('items', items)
    const cleanedItems = items.map(item => {
      return {
        item_id: item.item_id, 
        quantity: item.quantity, 
        is_checked: item.is_checked}
    })
    return ({
      data: {
        userID: props.userInfo.userId,
        tripDetails: {
          destination: quizData.destination,
          duration: quizData.number_of_days,
          title: quizData.name
        },
        items: cleanedItems
      }
    })
  }

  const compileSubmissionData = () => {
    const modifyWeatherData = quizData.weather.map(weather => {
      return `%${weather}%`
    })
    return  ({
      data: {
        id: 0,
        type: 'survey',
        attributes: {
          gender: ['All', quizData.gender],
          weather: ['All', ...modifyWeatherData],
          tripDetails: {
            title: quizData.name,
            destination: quizData.destination,
            duration: quizData.number_of_days,
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

  const displayErrorMessage = () => {
    window.scrollTo(0,0) 
    return(
    <h3 className="invalid-message">
      Please answer all the questions in the quiz before proceeding.
    </h3>)
  }

  return (
    <section className='quiz-wrapper'>
      <div className='quiz-aside'></div>
      <form className="quiz-container">
        {error && displayErrorMessage()}
        <section className="quiz-form">
          <div className='quiz-header'>
            <h1>Trip Details</h1>
            <p className="quizIntro">Answer the required questions below to get your custom packing list.</p>
          </div>
          {generateQuizQuestions()}  
          <button
            className="quiz-submit-btn"
            onClick={validateForm}
          >Get My Packing List!
          </button>
        </section>
      </form>
      <div className='quiz-aside'></div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  packingList: state.packingList,
  userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentList: data => dispatch(setCurrentList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
