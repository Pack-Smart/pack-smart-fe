// UI Imports
import './HowItWorks.scss'
import { BsCardChecklist } from 'react-icons/bs'
import { FaSuitcaseRolling } from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'
import { RiEmotionHappyLine } from 'react-icons/ri'

// App Imports
import Review from '../Review/Review'
import Step from '../Step/Step'

const HowItWorks = (props) => {
  return(
    <section className='how-it-works-container'>
      <h1 className='how-it-works-title'>How Pack Smart Makes Packing Easy</h1>
      <article className='steps-container'>
        <section className='steps-1and2'>
          <Step 
            icon={<GiEarthAmerica size={70} />}
            stepNum={1}
            description='Pick Your Next Perfect Vacation Destination'
          />
          <Step 
            icon={<BsCardChecklist size={70} />}
            stepNum={2}
            description='Fill out your Trip Details and Packing Preferences'
          />
        </section>
        <section className='steps-3and4'> 
          <Step 
            icon={<FaSuitcaseRolling size={70} />}
            stepNum={3}
            description='Review and Edit Your Perfectly Curated Packing List'
          />
          <Step 
            icon={<RiEmotionHappyLine size={70} />}
            stepNum={4}
            description='Never Forget a Packing Item Again!'
          />
        </section>
      </article>
      <article className='reviews-container'>
        <Review 
          review={`"Pack Smart helped me pack perfectly for my business trip. I always forget something work related but Pack Smart included all the items I needed!"`}
          name='- Bob G.'
          location='Seattle, WA'
        />
        <Review 
          review={`"I have two young kids which makes it easy to forget essentials on my trip. Pack Smart easily customized my list to include children so I remember everything they will need!"`}
          name='- Frank P.'
          location='Austin, TX'
        />
        <Review 
          review={`"Pack Smart is an incredible App that ensures your are packed to perfection without lugging around anything extra."`}
          name='- Villiam M.'
          location='Denver, CO'
        />
      </article>
    </section>
  )
}

export default HowItWorks
