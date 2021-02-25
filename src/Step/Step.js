import './Step.scss'
import { GiEarthAmerica } from 'react-icons/gi'
import { BsCardChecklist } from 'react-icons/bs'
import { FaSuitcaseRolling } from 'react-icons/fa'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'

const Step = ({ icon, stepNum, description}) => {
  const generateSteps = () => {
    return(
      <div className='step'>
        {icon}
        <h1 className='step-title'>Step {stepNum}</h1>
        <p className='step-description'>{description}</p>
      </div>
    )
  }

  return generateSteps()
}

export default Step