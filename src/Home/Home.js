import './Home.scss'
import { Link } from 'react-router-dom'
import lady from './lady.png'

const Home = (props) => {
  return(
    <section className='home'>

      <h1 className='pack-smart-title'>Pack Smart</h1>
      <p>Welcome to Pack Smart! Let us help you get started packing for your next travel adventure!</p>
      <img src={ lady }/>
      <Link to='/packing-quiz' className='start-button'>
        Get Started!
      </Link>
    </section>
  )
}

export default Home