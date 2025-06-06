import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router"
import axios from "axios";
import * as z from "zod";

import GoBackButton from "../../UI/GoBackButton/GoBackButton"

const LoginPage = () => {
    const navigate = useNavigate()

    const schema = z.object({
        email: z.string()
            .nonempty({ message: "Enter an email" })
            .email(),
        password: z.string()
            .nonempty({ message: "Enter a password" })
            .min(8, { message: "Password must contain at least 8 characters" })
            .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, { message: "Password must contain both letters and numbers" })
    });

    type Schema = z.infer<typeof schema>;

    const { register, handleSubmit, setError, formState: { errors } } = useForm<Schema>({
        resolver: zodResolver(schema)
    });


    const onSubmit = async (data: Schema) => {
        axios.post("https://poorgym.onrender.com/login", data)
        // redirect user to the workout planner page if data has been sent successfuly
        .then(res => {
            if(res.status === 201) {
                navigate("/workoutPlanner")
            }
            else {
                setError("password", {
                    type: "custom",
                    message: "Something went wrong. Try again"
                })
            }
        })
        .catch(error => {
            const errorMessage = error.response.data.error

            if(errorMessage === "User not found") {
                setError("email", {
                    type: "custom",
                    message: errorMessage
                })
            }
            else {
                setError("password", {
                    type: "custom",
                    message: errorMessage
                })
            }
        })
    };

    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">Login</h1>
                <form action="POST" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} type="email" placeholder="Email" />
                    <div className="error">{errors.email?.message}</div>
                    <input {...register("password")} type="password" placeholder="Password" />
                    <div className="error">{errors.password?.message}</div>
                    <button type="submit" className="submit primaryButton">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage