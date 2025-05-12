import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../Contexts/GoBackButton/GoBackButton"

const HealthInfoPage = () => {
    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">Health</h1>
                <form action="POST">
                    <select name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <select name="measurement-units">
                        <option value="metric">Metric</option>
                        <option value="imperial">Imperial</option>
                    </select>
                    <input type="text" placeholder="Weight" />
                    <input type="text" placeholder="Height" />
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default HealthInfoPage