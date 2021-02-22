import './QuestionInput.scss'

const QuestionInput = (props) => {
  const { question, type, placeholder, name } = props.questionDetails
  const { handleChange } = props
  return (
    <div className={`trip-${name}-field`}>
        <h2>{question}</h2>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
        />
      </div>
  )
}

export default QuestionInput