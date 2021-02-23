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
    event.target.closest('div').children[0].className = '' 
    event.target.closest('div').children[1].className = '' 
    event.target.closest('div').children[2].className = '' 
    event.target.className = 'selected-answer-btns' 
  }

  const toggleSelectAllClass = (event) => {
    event.target.className === '' ? 
    (event.target.className = 'selected-answer-btns') : 
    (event.target.className = '')  
  }

  const createButtons = (buttonNames) => {
    return buttonNames.map(name => {
      return <button key={name} name={name} className='' onClick={(event) => handleButtonClick(event)}>{name}</button>
    })
  }

  return (
    <div className={`trip-${category}-field`}>
      <h2>{question}</h2>
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