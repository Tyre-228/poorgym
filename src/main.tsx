import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './assets/scss/style.scss'
import Homepage from './Pages/Homepage/Homepage'
import LoginPage from './Pages/LoginModule/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='login' element={<LoginPage/>} />
        <Route path="register" element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)