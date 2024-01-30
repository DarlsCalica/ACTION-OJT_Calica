import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Calculator from './pages/Calculator'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Json from './pages/Json'
import Hobbies from './pages/Hobbies'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/json_sample" element={<Json />}></Route>
        <Route path="/hobbies" element={<Hobbies />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
