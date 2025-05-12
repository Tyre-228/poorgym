import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../Contexts/GoBackButton/GoBackButton"

const LoginPage = () => {
    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">Login</h1>
                <form action="POST">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="submit primaryButton">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage