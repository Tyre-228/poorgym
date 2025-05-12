import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './assets/scss/style.scss'
import Homepage from './Pages/Homepage/Homepage'
import RegisterPage from './Pages/Authentication/SignUp'
import LoginPage from './Pages/Authentication/LoginPage'
import GoalTypePage from './Pages/Authentication/GoalTypePage'
import GoalDescriptionPage from './Pages/Authentication/GoalDescriptionPage'
import LifestyleActivityPage from './Pages/Authentication/LifestyleActivityPage'
import HealthInfoPage from './Pages/Authentication/HealthInfoPage'
import TheorySettingsPage from './Pages/Authentication/TheorySettingsPage'
import InjuriesPage from './Pages/Authentication/InjuriesPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='login' element={<LoginPage/>} />
        <Route path="register" element={<RegisterPage/>} />
        <Route path='registration/goalType' element={<GoalTypePage/>} />
        <Route path='registration/goalDescription' element={<GoalDescriptionPage/>} />
        <Route path='registration/lifestyleActivity' element={<LifestyleActivityPage/>} />
        <Route path='registration/healthInfo' element={<HealthInfoPage/>} />
        <Route path='registration/theoryPage' element={<TheorySettingsPage/>} />
        <Route path='registration/injuries' element={<InjuriesPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)