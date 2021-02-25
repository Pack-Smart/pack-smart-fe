import './HowItWorks.scss'
import { GiEarthAmerica } from 'react-icons/gi'
import { BsCardChecklist } from 'react-icons/bs'
import { FaSuitcaseRolling } from 'react-icons/fa'
import { RiEmotionHappyLine } from 'react-icons/ri'

const HowItWorks = (props) => {
  return(
    <section className='how-it-works-container'>
      <h1 className='how-it-works-title'>How Pack Smart Makes Packing Easy</h1>
      <article className='steps-container'>
        <div className='step'>
          <GiEarthAmerica size={125} />
          <h1>Step 1</h1>
          <p>Pick Your Next Perfect Vacation Destination</p>
        </div>
        <div className='step'>
          <BsCardChecklist size={125} />
          <h1>Step 2</h1>
          <p>Fill out your Trip Details and Packing Preferences</p>
        </div>
        <div className='step'>
          <FaSuitcaseRolling size={125} />
          <h1>Step 3</h1>
          <p>Review and Edit Your Perfectly Curated Packing List</p>
        </div>
        <div className='step'>
          <RiEmotionHappyLine size={125} />
          <h1>Step 4</h1>
          <p>Never Forget a Packing Item Again!</p>
        </div>
      </article>
      <article className='reviews-container'>
        <div className='review'>
          <h1>"Pack Smart helped me pack perfectly for my business trip. I always forget something work related but Pack Smart included all the items I needed!"</h1>
          <p>- Bob G.</p>
          <p>Seattle, WA</p>
        </div>
        <div className='review'>
          <h1>"I have two young kids which makes it easy to forget essentials on my trip. Pack Smart easily customized my list to include children so I remember everything they will need!"</h1>
          <p>- Anonymous</p>
          <p>Austin, TX</p>
        </div>
        <div className='review'>
          <h1>"Pack Smart is an incredible App that ensures your are packed to perfection without lugging around anything extra."</h1>
          <p>- Villiam M.</p>
          <p>Denver, CO</p>
        </div>
      </article>
    </section>
  )
}

export default HowItWorks