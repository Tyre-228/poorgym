import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";

import GoBackButton from "../../UI/GoBackButton/GoBackButton"
import axios from "axios";

const LoginPage = () => {
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

    const { register, handleSubmit, formState: { errors } } = useForm<Schema>({
        resolver: zodResolver(schema)
    });

    useEffect(() => {
        console.log(errors)
    }, [errors])

    const onSubmit = async (data: Schema) => {
        console.log("data sent")
        axios.post("https://poorgym.onrender.com/login", data).then(res => {
            console.log(res.status)
            console.log(res.data)
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