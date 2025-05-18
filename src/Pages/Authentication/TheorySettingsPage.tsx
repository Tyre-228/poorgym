import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../UI/GoBackButton/GoBackButton"
import { saveAnswer } from "../../helpers"
import { useNavigate } from "react-router"

const TheorySettingsPage = () => {
    const navigate = useNavigate()

    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">Do you want to enable theory page?</h1>
                <form action="POST" onSubmit={() => {
                    event?.preventDefault()
                    const choice = (document.querySelector("input[name=choice]:checked") as HTMLInputElement).value
                    const data = { data: choice }

                    saveAnswer(data, 4)
                    navigate("/registration/injuries")
                }}>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice1" value="enable theory" required />
                        <label htmlFor="choice1">Yes(Enable theory page)</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice2" value="enable beginner course" />
                        <label htmlFor="choice2">Yes(Enable beginner course)</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice3" value="disable theory" />
                        <label htmlFor="choice3">No</label>
                    </div>
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default TheorySettingsPage