// modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

// Styles
import "./assets/scss/forms.scss"
import './assets/scss/style.scss'

// Components
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
import AccountSettingsPage from './Pages/AccountSettingsPage/AccountSettingsPage'
import NewWorkoutForm from './Pages/NewWorkoutForm/NewWorkoutForm'
import WorkoutEditor from './Pages/WorkoutEditor/WorkoutEditor'


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

        {/* Main pages */}
        <Route path='workoutPlanner' element={<WorkoutPlannerPage/>} />
        <Route path='exercises' element={<ExercisesPage/>} />
        <Route path='accountSettings' element={<AccountSettingsPage/>} />

        {/* NewWorkoutForm */}
        <Route path='newWorkout' element={<NewWorkoutForm/>} />

        <Route path='workoutEditor' element={<WorkoutEditor/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)