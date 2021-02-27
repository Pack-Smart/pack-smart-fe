
import { AiFillStar } from 'react-icons/ai'

const Review = ({ review, name, location}) => {
  const generateReviews = () => {
    return(
      <div className='review'>
        <h1>{review}</h1>
        <p>{name}</p>
        <p>{location}</p>
        <div className='star-rating'>
          <AiFillStar size={25}/>
          <AiFillStar size={25}/>
          <AiFillStar size={25}/>
          <AiFillStar size={25}/>
          <AiFillStar size={25}/>
        </div>
      </div>
    )
  }

  return(
    generateReviews()
  )
}

export default Review