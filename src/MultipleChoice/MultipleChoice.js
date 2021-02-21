import './MultipleChoice.scss'

const MultipleChoice = ({ category, question, firstRowBtns, secRowBtns, handleClick, handleClickArg }) => {
  const handleButtonClick = (event) => {
    handleClick(event, handleClickArg)
    event.target.className === '' ? 
    (event.target.className = 'selected-answer-btns') : 
    (event.target.className = '')
  }
  const createButtons = (buttonNames) => {
    return buttonNames.map(name => {
      return <button key={name} name={name.toLowerCase()} className='' onClick={(event) => handleButtonClick(event)}>{name}</button>
    })
  }

  return (
    <div className={`trip-${category}-field`}>
      <h2>{question}</h2>
      <p className="select-all-txt">(Select all that apply)</p>
      <div className="quiz-answer-btns">
        {createButtons(firstRowBtns)}
      </div>
      <div className="quiz-answer-btns">
        {createButtons(secRowBtns)}
      </div>
    </div>
  )
}

export default MultipleChoice