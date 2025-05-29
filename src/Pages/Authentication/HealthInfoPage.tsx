import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../UI/GoBackButton/GoBackButton"
import { saveAnswer } from "../../helpers"
import { useNavigate } from "react-router"

const HealthInfoPage = () => {
    const navigate = useNavigate()

    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">Health</h1>
                <form action="POST" onSubmit={() => {
                    event?.preventDefault()
                    const data = { 
                        gender: (document.getElementById("gender") as HTMLInputElement).value,
                        measurementUnits: (document.getElementById("measurementUnits") as HTMLInputElement).value,
                        weight: (document.getElementById("weight") as HTMLInputElement).value,
                        height: (document.getElementById("height") as HTMLInputElement).value,
                     }

                    saveAnswer("gender", data.gender)
                    saveAnswer("measurementUnits", data.measurementUnits)
                    saveAnswer("weight", data.weight)
                    saveAnswer("height", data.height)
                    navigate("/registration/theory")
                }}>
                    <select name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <select name="measurement-units" id="measurementUnits">
                        <option value="metric">Metric</option>
                        <option value="imperial">Imperial</option>
                    </select>
                    <input type="number" placeholder="Weight" id="weight" required />
                    <input type="number" placeholder="Height" id="height" required />
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default HealthInfoPage