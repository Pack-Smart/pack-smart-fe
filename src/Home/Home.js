import './Home.scss'
import { Link } from 'react-router-dom'
import { backgroundStyle } from './backgroundStyle'

const Home = () => {
  return(
    <div className='home-container' style={ backgroundStyle }>
      <section className='home-aside'></section>
      <section className='home'>
      <h1 className='pack-smart-title'>Pack Smart</h1>
      <section className='pack-smart-description'>
        <h2>Having trouble figuring out what to pack for your next trip?</h2>
        <h2>Let Pack Smart curate your perfect list!</h2>
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