import './Quiz.scss'

const Quiz = (props) => {
  return (
    <form className="quiz-form">
      <p>Fill in all the below fields to get your custom packing list.</p>
      <div className="trip-name-field">
        <h2>Packing List Name</h2>
        <input
          type="text"
          placeholder="e.g. Cancun 20 08!"
        />
      </div>
      <div className="trip-gender-field">
        <h2>I'm packing for:</h2>
        <button>Female</button>
        <button>Male</button>
        <button>Non-Binary</button>
      </div>
      <div className="trip-location-field">
        <h2>Going to:</h2>
        <input
          type="text"
          placeholder="e.g. Mexico"
        />
      </div>
      <div className="trip-duration-field">
        <h2>Number of days:</h2>
        <input 
          type="number"
          placeholder="3"
        />
      </div>
      <div className="trip-weather-field">
        <h2>What will the weather be like?</h2>
        <p className="select-all-txt">(Select all that apply)</p>
        <div className="quiz-answer-btns">
          <button>Cold</button>
          <button>Cool</button>
          <button>Warm</button>
        </div>
        <div className="quiz-answer-btns">
          <button>Hot</button>
          <button>Rainy</button>
          <button>Snowy</button>
        </div>
      </div>
      <div className="trip-activities-field">
        <h2>What activities do you plan to do</h2>
        <p className="select-all-txt">(Select all that apply)</p>
        <div className="quiz-answer-btns">
          <button>Skiing</button>
          <button>Beach</button>
          <button>Hiking</button>
        </div>
        <div className="quiz-answer-btns">
          <button>Night Life</button>
          <button>Wedding</button>
          <button>Business</button>
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