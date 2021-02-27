import './Step.scss'
import { GiEarthAmerica } from 'react-icons/gi'
import { BsCardChecklist } from 'react-icons/bs'
import { FaSuitcaseRolling } from 'react-icons/fa'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'

const Step = ({ icon, stepNum, description}) => {
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

export default Step