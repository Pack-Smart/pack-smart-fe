import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header.js'
import Home from '../Home/Home'
import Error from '../Error/Error'
import Quiz from '../Quiz/Quiz'
import PackingList from '../PackingList/PackingList'
import './App.scss'

const App = (props) => {
  return(
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/packing-quiz' component={Quiz}/>
          <Route exact path='/saved-packing-lists' component={PackingList}/>
          <Route path='/' component={Error} />
        </Switch>
      </main>
    </div>
  )
}

export default App
