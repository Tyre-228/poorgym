import GoBackButton from "../../UI/GoBackButton/GoBackButton"

const NewWorkoutForm = () => {
    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h2 className="title">Create new workout</h2>
                <form action="">
                    <input type="text" placeholder="Workout name" required />
                    <select name="day" id="day">
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                        <option value="any">Any</option>
                    </select>
                    <input type="text" placeholder="Muscles" required />
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NewWorkoutForm