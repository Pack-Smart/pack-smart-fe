import './QuestionInput.scss'

const QuestionInput = (props) => {
  const { question, type, placeholder, name } = props.questionDetails
  const { handleChange } = props

  return (
    <div className={`trip-${name}-field`}>
        <h2 className='question-input-question'>{question}</h2>
        {type === "text" && <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          maxInput=''
        />}
        {type === "number" && 
          <section className='number-input'>
            <input
              type={type}
              placeholder={placeholder}
              name={name}
              onChange={handleChange}
              min='1'
              onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
            />
          </section>
        }
      </div>
  )
}

export default QuestionInput
