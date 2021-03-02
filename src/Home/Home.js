import './Home.scss'
import { Link } from 'react-router-dom'
import { backgroundImages } from './images/imageData'

const Home = () => {
  const generateRandomImage = () => {
    let randomIndex = Math.floor(Math.random() * 50)
    return backgroundImages[randomIndex]
  }

  const backgroundStyle = {
    backgroundImage: `url(${generateRandomImage()})`,
    backgroundSize: 'cover'
  }

  return(
    <div className='home-container' style={ backgroundStyle }>
      <section className='home-aside'></section>
      <section className='home'>
      <h1 className='pack-smart-title'>Pack Smart</h1>
      <section className='pack-smart-description'>
        <h3>Having trouble figuring out what to pack for your next trip?</h3>
        <h3>Take our quiz to build the perfect list!</h3>
      </section>
        <Link to='/packing-quiz' className='start-button'>
          Get Started!
        </Link>
      </section>
      <section className='home-aside'></section>
    </div>
  )
}

export default Home