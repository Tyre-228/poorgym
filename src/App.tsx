import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router"
import PreloaderPage from "./pages/PreloaderPage/PreloaderPage"
import HomePage from "./pages/HomePage/HomePage"
import TimerPage from "./pages/TimerPage/TimerPage";

const App: React.FC = () => {
  // const [data, setData] = useState("")
  
  // useEffect(() => {
  //   fetch("https://poorgym.onrender.com").then(res => {
  //     if(!res.ok) {
  //       console.log("Error")
  //     }

  //     return res.json()
  //   }).then(resData => {
  //     let data = resData.data
  //     setData(data)
  //   })
  // }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<Navigate to="/preloader" />} /> */}
        <Route path="/preloader" element={<PreloaderPage />} />
        <Route path="/timer" element={<TimerPage />} />
      </Routes>
    </Router>
  );
}

export default App;