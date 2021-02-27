import './Home.scss'
import { Link } from 'react-router-dom'
import lady from './lady.png'
import { connect } from 'react-redux'
import { setUser } from '../actions/actions'

const Home = (props) => {

  const login = () => {
    props.setUser({userId: 1})
  }

  return(
    <div className='home-container'>
      <section className='home-aside'></section>
      <section className='home'>
      <h1 className='pack-smart-title'>Pack Smart</h1>
        <p>Having trouble figuring out what to pack for your next trip? Take our quiz to build the perfect list!</p>
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