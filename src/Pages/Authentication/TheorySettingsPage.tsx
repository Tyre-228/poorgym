import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../Contexts/GoBackButton/GoBackButton"

const TheorySettingsPage = () => {
    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">Do you want to enable theory page?</h1>
                <form action="POST">
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice1" value="weight loss" />
                        <label htmlFor="choice1">Yes(Enable theory page)</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice2" value="Muscle growth" />
                        <label htmlFor="choice2">Yes(Enable beginner course)</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice3" value="healthy lifestyle" />
                        <label htmlFor="choice3">No</label>
                    </div>
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default TheorySettingsPage