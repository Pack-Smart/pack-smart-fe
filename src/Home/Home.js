import './Home.scss'
import { Link } from 'react-router-dom'
import lady from './lady.png'

const Home = (props) => {
  return(
    <div className='home-container'>
      <section className='home-aside'></section>
      <section className='home'>
        <p>Having trouble figuring out what to pack for your next trip? Take our 30 second quiz to build the perfect list!</p>
        <img src={ lady }/>
        <Link to='/packing-quiz' className='start-button'>
          Get Started!
        </Link>
      </section>
      <section className='home-aside'></section>
    </div>
  )
}

export default Home