import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../Contexts/GoBackButton/GoBackButton"

const LifestyleActivityPage = () => {
    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">How active is your lifestyle</h1>
                <form action="POST">
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice1" value="weight loss" />
                        <label htmlFor="choice1">Not active</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice2" value="Muscle growth" />
                        <label htmlFor="choice2">Active lifestyle/job</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice3" value="healthy lifestyle" />
                        <label htmlFor="choice3">Beginner in any sport</label>
                    </div>
                    <div className="field">
                        <input className="choice" type="radio" name="choice" id="choice4" value="healthy lifestyle" />
                        <label htmlFor="choice4">Advanced in any sport</label>
                    </div>
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LifestyleActivityPage