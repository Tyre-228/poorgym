import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../UI/GoBackButton/GoBackButton"
import { saveAnswer } from "../../helpers"
import { useNavigate } from "react-router"

const InjuriesPage = () => {
    const navigate = useNavigate()

    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">Do you have any injuries or medical conditions?</h1>
                <form action="POST" onSubmit={() => {
                    event?.preventDefault()
                    const choice = (document.querySelector("input[name=choice]:checked") as HTMLInputElement).value
                    const data = { data: choice }

                    saveAnswer(data, 6)
                    navigate("/register")
                }}>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice1" value="yes" required />
                        <label htmlFor="choice1">Yes</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice3" value="no" />
                        <label htmlFor="choice3">No</label>
                    </div>
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default InjuriesPage