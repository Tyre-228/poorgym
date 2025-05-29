import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './assets/scss/style.scss'
import Homepage from './Pages/Homepage/Homepage'
import RegisterPage from './Pages/Authentication/RegisterPage'
import LoginPage from './Pages/Authentication/LoginPage'
import GoalTypePage from './Pages/Authentication/GoalTypePage'
import GoalDescriptionPage from './Pages/Authentication/GoalDescriptionPage'
import SportExperiencePage from './Pages/Authentication/SportExperiencePage'
import HealthInfoPage from './Pages/Authentication/HealthInfoPage'
import TheorySettingsPage from './Pages/Authentication/TheorySettingsPage'
import InjuriesPage from './Pages/Authentication/InjuriesPage'
import WorkoutPlannerPage from './Pages/WorkoutPlannerPage/WorkoutPlannerPage'
import ExercisesPage from './Pages/ExercisesPage/ExercisesPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path='/' element={<Homepage/>} />

        {/* Authentication */}
        <Route path='login' element={<LoginPage/>} />
        <Route path="register" element={<RegisterPage/>} />
        <Route path='registration/goalType' element={<GoalTypePage/>} />
        <Route path='registration/goalDescription' element={<GoalDescriptionPage/>} />
        <Route path='registration/sportExperience' element={<SportExperiencePage/>} />
        <Route path='registration/healthInfo' element={<HealthInfoPage/>} />
        <Route path='registration/theory' element={<TheorySettingsPage/>} />
        <Route path='registration/injuries' element={<InjuriesPage/>} />

        {/* Workout planner */}
        <Route path='workoutPlanner' element={<WorkoutPlannerPage/>} />
        <Route path='exercises' element={<ExercisesPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)