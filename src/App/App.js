import { Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../actions/actions'
import Error from '../Error/Error'
import Header from '../Header/Header'
import Home from '../Home/Home'
import HowItWorks from '../HowItWorks/HowItWorks'
import PackingList from '../PackingList/PackingList'
import Quiz from '../Quiz/Quiz'
import SavedView from '../SavedView/SavedView'
import App from './App.scss'

const App = (props) => {

  useEffect(() => {
    props.setUser({userId: 1})
  }, [])

  return(
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/packing-quiz' component={Quiz}/>
          <Route exact path='/packing-list' component={PackingList}/>
          <Route exact path='/saved-packing-lists' component={SavedView}/>
          <Route exact path='/how-it-works' component={HowItWorks} />
          <Route path='/' render={() => {
            return (<Error 
              errorMessage='Oops! The page you are looking for does not exist.'
            />)}
          }/>
        </Switch>
      </main>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setUser: userInfo => dispatch(setUser(userInfo))
})

export default connect(mapDispatchToProps, {setUser})(App)
