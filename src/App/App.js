import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Error from '../Error/Error'
import Quiz from '../Quiz/Quiz'
import SavedView from '../SavedView/SavedView'
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
          <Route exact path='/packing-list' component={PackingList}/>
          <Route exact path='/saved-packing-lists' component={SavedView}/>
          <Route path='/' component={Error} />
        </Switch>
      </main>
    </div>
  )
}

export default App
