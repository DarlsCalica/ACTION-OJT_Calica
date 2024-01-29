import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Calculator from './pages/Calculator'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
