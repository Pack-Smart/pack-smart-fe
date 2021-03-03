import { GiEarthAmerica } from 'react-icons/gi'
import { BsCardChecklist } from 'react-icons/bs'
import { FaSuitcaseRolling } from 'react-icons/fa'
import { RiEmotionHappyLine } from 'react-icons/ri'

export const steps = [
  {
    stepNum: 1,
    icon: <GiEarthAmerica size={70} />,
    description: 'Pick Your Next Perfect Vacation Destination'
  },
  {
    stepNum: 2,
    icon: <BsCardChecklist size={70} />,
    description: 'Fill out your Trip Details and Packing Preferences'
  },
  {
    stepNum: 3,
    icon: <FaSuitcaseRolling size={70} />,
    description: 'Review and Edit Your Perfectly Curated Packing List'
  },
  {
    stepNum: 4,
    icon: <RiEmotionHappyLine size={70} />,
    description: 'Never Forget a Packing Item Again!'
  }
]

export const reviews = [
  {
    id: 1,
    customerReview: `"Pack Smart helped me pack perfectly for my business trip. I always forget something work related but Pack Smart included all the items I needed!"`,
    name: '- Bob G.',
    location: 'Seattle, WA'
  },
  {
    id: 2,
    customerReview: `"I have two young kids which makes it easy to forget essentials on my trip. Pack Smart easily customized my list to include children so I remember everything they will need!"`,
    name: '- Frank P.',
    location: 'Austin, TX'
  },
  {
    id: 3,
    customerReview: `"Pack Smart is an incredible App that ensures you are packed to perfection without lugging around anything extra."`,
    name: '- Villiam M.',
    location: 'Denver, CO'
  }
]