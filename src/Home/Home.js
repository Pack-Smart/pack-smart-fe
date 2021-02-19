import './Home.scss'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return(
    <section className='home'>

      <h1>Pack Smart</h1>
      <p>Welcome to Pack Smart! Let us help you get started on your next travel adventure!</p>
      <img/>
      <Link to='/packing-quiz'>
        <button>Get Started!</button>
      </Link>
    </section>
  )
}

export default Home