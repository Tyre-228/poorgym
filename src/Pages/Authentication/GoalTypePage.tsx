import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../UI/GoBackButton/GoBackButton"
import { saveAnswer } from "../../helpers"
import { useNavigate } from "react-router"


const GoalTypePage = () => {    
    const navigate = useNavigate()

    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">Goal type</h1>
                <form action="POST" method="" onSubmit={() => {
                    event?.preventDefault()
                    const choice = (document.querySelector("input[name=choice]:checked") as HTMLInputElement).value
                    const data = { data: choice }
                    
                    saveAnswer(data, 1)
                    navigate("/registration/goalDescription")
                }}>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice1" value="weight loss" required />
                        <label htmlFor="choice1">Weight loss</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice2" value="Muscle growth" />
                        <label htmlFor="choice2">Muscle growth</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice3" value="healthy lifestyle" />
                        <label htmlFor="choice3">Healthy lifestyle</label>
                    </div>
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default GoalTypePage