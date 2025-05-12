import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../Contexts/GoBackButton/GoBackButton"

const GoalDescriptionPage = () => {
    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">Tell us about your goal</h1>
                <form action="POST">
                    <textarea placeholder="Goal details..."></textarea>
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default GoalDescriptionPage