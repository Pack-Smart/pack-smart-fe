import './MultipleChoice.scss'

const MultipleChoice = (props) => {
  const { category, question, subtext, buttons } = props.questionDetails
  const { handleClick } = props

  const handleButtonClick = (event) => {
    handleClick(event, category)
    
    if (category === 'gender') {
      toggleGenderButtonClass(event)
    } else {
      toggleSelectAllClass(event)
    }
  }

  const toggleGenderButtonClass = (event) => {
    event.target.closest('div').children[0].className = 'unselected-answer-button' 
    event.target.closest('div').children[1].className = 'unselected-answer-button' 
    event.target.closest('div').children[2].className = 'unselected-answer-button' 
    event.target.className = 'selected-answer-btns' 
  }

  const toggleSelectAllClass = (event) => {
    event.target.className === 'unselected-answer-button' ? 
    (event.target.className = 'selected-answer-btns') : 
    (event.target.className = 'unselected-answer-button')  
  }

  const createButtons = (buttonNames) => {
    return buttonNames.map(name => {
      return <button key={name} name={name} className='unselected-answer-button' onClick={(event) => handleButtonClick(event)}>{name}</button>
    })
  }

  return (
    <div className={`trip-${category}-field`}>
      <h2 className='multiple-choice-question'>{question}</h2>
      {subtext.length > 0 &&
        <p className="select-all-txt">{subtext}</p>
      }
      <div className={`${category}-answer-btns`}>
        {createButtons(buttons)}
      </div>
    </div>
  )
}

export default MultipleChoice