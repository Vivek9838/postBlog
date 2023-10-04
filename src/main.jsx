import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-loading-skeleton/dist/skeleton.css'
import {BrowserRouter, Router} from "react-router-dom"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <App />
   </BrowserRouter>

  </React.StrictMode>,
)