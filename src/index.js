import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools())

const router = 
<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>

ReactDOM.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>,
  document.getElementById('root')
);

