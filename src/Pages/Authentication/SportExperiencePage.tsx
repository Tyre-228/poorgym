import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../UI/GoBackButton/GoBackButton"
import { saveAnswer } from "../../helpers"
import { useNavigate } from "react-router"

const SportExperiencePage = () => {
    const navigate = useNavigate()

    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">How experienced are you in sport?</h1>
                <form action="POST" onSubmit={() => {
                    event?.preventDefault()
                    const choice = (document.querySelector("input[name=choice]:checked") as HTMLInputElement).value
                    const data = { data: choice }

                    saveAnswer(data, 3)
                    navigate("/registration/healthInfo")
                }}>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice1" value="not active lifestyle" required />
                        <label htmlFor="choice1">Not active lifestyle</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice2" value="active lifestyle" />
                        <label htmlFor="choice2">Active lifestyle</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice3" value="beginner" />
                        <label htmlFor="choice3">Beginner in any sport</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice4" value="advanced" />
                        <label htmlFor="choice4">Advanced in any sport</label>
                    </div>
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SportExperiencePage