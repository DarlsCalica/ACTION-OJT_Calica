import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import JSON from './pages/Json'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


// Routes for different Pages
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/JSON" element={<JSON />}></Route>
      <Route path="/calculator" element={<Calculator />}></Route>
    </Routes>
  </React.StrictMode>,
)
