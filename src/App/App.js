import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header.js'
import Home from '../Home/Home.js'
import Error from '../Error/Error.js'
import './App.scss'

const App = (props) => {
  return(
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/' component={Error} />
        </Switch>
      </main>
    </div>
  )
}

export default App
