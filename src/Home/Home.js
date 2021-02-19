import './Home.scss'
import { Link } from 'react-router-dom'
import lady from '../assets/lady.png'

const Home = (props) => {
  return(
    <section className='home'>

      <h1 className='pack-smart-title'>Pack Smart</h1>
      <p>Welcome to Pack Smart! Let us help you get started packing for your next travel adventure!</p>
      <img src={ lady }/>
      <Link to='/packing-quiz'>
        <button className='start-button'>Get Started!</button>
      </Link>
    </section>
  )
}

export default Home