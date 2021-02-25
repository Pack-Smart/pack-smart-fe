import '@testing-library/jest-dom'
import { render  } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux' 
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'


import App from './App'

describe("App", () => {
  it('should render without crashing', () => {
    const store = createStore(rootReducer, composeWithDevTools())

    render(
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>  
    )
  })
})