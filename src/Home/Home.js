import './Home.scss'
import { Link } from 'react-router-dom'
import lady from './lady.png'

const Home = () => {
  return(
    <div className='home-container'>
      <section className='home-aside'></section>
      <section className='home'>
      <h1 className='pack-smart-title'>Pack Smart</h1>
        <p>Having trouble figuring out what to pack for your next trip? Take our quiz to build the perfect list!</p>
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