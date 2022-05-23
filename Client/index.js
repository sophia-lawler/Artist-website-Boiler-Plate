import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import reducers from './reducers'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
      <Router>
        <App />
      </Router>,
    document.getElementById('app')
  )
})