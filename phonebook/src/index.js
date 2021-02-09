import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const persons = []

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)