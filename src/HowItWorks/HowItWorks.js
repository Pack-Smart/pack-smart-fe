// UI Imports
import './HowItWorks.scss'
import Step from '../Step/Step'
import Review from '../Review/Review'
import { steps, reviews } from './howItWorksData'

const HowItWorks = () => {

  const generateSteps = (stepNum1, stepNum2) => {
    let stepsToDisplay = steps.filter(step => {
      return step.stepNum === stepNum1 || step.stepNum === stepNum2
    })
    return stepsToDisplay.map(step => {
      return(
        <Step 
          key={step.stepNum}
          icon={step.icon}
          stepNum={step.stepNum}
          description={step.description}
        />)
    })
  }

  const generateReviews = () => {
    return reviews.map(review => {
      return(
        <Review
          key={review.name} 
          review={review.customerReview}
          name={review.name}
          location={review.location}
        />
      )
    })
  }

  return(
    <section className='how-it-works-container'>
      <h1 className='how-it-works-title'>How Pack Smart Makes Packing Easy</h1>
      <article className='steps-container'>
        <section className='steps-1and2'>
          {generateSteps(1, 2)}
        </section>
        <section className='steps-3and4'>
          {generateSteps(3, 4)}
        </section>
      </article>
      <article className='reviews-container'>
        {generateReviews()}
      </article>
    </section>
  )
}

export default HowItWorks
