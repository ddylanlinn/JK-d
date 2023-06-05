import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {server} from './mocks/server'
server.listen()

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
