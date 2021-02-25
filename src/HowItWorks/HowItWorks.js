import './HowItWorks.scss'
import Step from '../Step/Step'
import { GiEarthAmerica } from 'react-icons/gi'
import { BsCardChecklist } from 'react-icons/bs'
import { FaSuitcaseRolling } from 'react-icons/fa'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'

const HowItWorks = (props) => {
  return(
    <section className='how-it-works-container'>
      <h1 className='how-it-works-title'>How Pack Smart Makes Packing Easy</h1>
      <article className='steps-container'>
        <Step 
          icon={<GiEarthAmerica size={125} />}
          stepNum={1}
          description='Pick Your Next Perfect Vacation Destination'
        />
        <Step 
          icon={<BsCardChecklist size={125} />}
          stepNum={2}
          description='Fill out your Trip Details and Packing Preferences'
        />
        <Step 
          icon={<FaSuitcaseRolling size={125} />}
          stepNum={3}
          description='Review and Edit Your Perfectly Curated Packing List'
        />
        <Step 
          icon={<RiEmotionHappyLine size={125} />}
          stepNum={4}
          description='Never Forget a Packing Item Again!'
        />
      </article>
      <article className='reviews-container'>
        <div className='review'>
          <h1>"Pack Smart helped me pack perfectly for my business trip. I always forget something work related but Pack Smart included all the items I needed!"</h1>
          <p>- Bob G.</p>
          <p>Seattle, WA</p>
          <div className='star-rating'>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
          </div>
        </div>
        <div className='review'>
          <h1>"I have two young kids which makes it easy to forget essentials on my trip. Pack Smart easily customized my list to include children so I remember everything they will need!"</h1>
          <p>- Anonymous</p>
          <p>Austin, TX</p>
          <div className='star-rating'>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
          </div>
        </div>
        <div className='review'>
          <h1>"Pack Smart is an incredible App that ensures your are packed to perfection without lugging around anything extra."</h1>
          <p>- Villiam M.</p>
          <p>Denver, CO</p>
          <div className='star-rating'>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
            <AiFillStar size={30}/>
          </div>
        </div>
      </article>
    </section>
  )
}

export default HowItWorks