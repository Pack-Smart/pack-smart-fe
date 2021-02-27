import './Step.scss'
import { AiFillStar } from 'react-icons/ai'
import { BsCardChecklist } from 'react-icons/bs'
import { FaSuitcaseRolling } from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'
import { RiEmotionHappyLine } from 'react-icons/ri'

const Step = ({ icon, stepNum, description}) => {
  const generateSteps = () => {
    return(
      <div className='step'>
        <section className='image-title-wrapper'>
          {icon}
          <h1 className='step-title'>Step {stepNum}</h1>
        </section>
        <p className='step-description'>{description}</p>
      </div>
    )
  }

  return generateSteps()
}

export default Step
