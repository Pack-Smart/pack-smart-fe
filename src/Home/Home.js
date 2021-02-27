import './Home.scss'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUser } from '../actions/actions'
import lady from './lady.png'

const Home = (props) => {

  const login = () => {
    props.setUser({userId: 1})
  }

  return(
    <div className='home-container'>
      <section className='home-aside'></section>
      <section className='home'>
        <p>Having trouble figuring out what to pack for your next trip? Take our 30 second quiz to build the perfect list!</p>
        <img src={ lady }/>
        <Link to='/packing-quiz' className='start-button' onClick={() => login() }>
          Get Started!
        </Link>
      </section>
      <section className='home-aside'></section>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setUser: userInfo => dispatch(setUser(userInfo))
})

export default connect(mapDispatchToProps, {setUser})(Home)