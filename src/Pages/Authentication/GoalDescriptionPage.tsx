import { useNavigate } from "react-router"

import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../UI/GoBackButton/GoBackButton"
import { saveAnswer } from "../../helpers"

const GoalDescriptionPage = () => {
    const navigate = useNavigate()

    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">Tell us about your goal</h1>
                <form action="POST" onSubmit={() => {
                    event?.preventDefault()
                    const data = { data: document.querySelector("textarea")?.value }
                    saveAnswer(data, 2)
                    navigate("/registration/sportExperience")
                }}>
                    <textarea placeholder="Goal details..." required></textarea>
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default GoalDescriptionPage