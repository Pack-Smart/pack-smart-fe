import BackgroundSlideshow from 'react-background-slideshow'
 
import image1 from './background1.jpeg'
import image2 from './background2.jpg'
import image3 from './background3.svg'
 
const Slideshow = () => {
  return (
    <div>
      <BackgroundSlideshow images={[ image1, image2, image3 ]} />
    </div>
  )
}

export default Slideshow