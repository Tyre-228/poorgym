import "../../assets/scss/style.scss"
import "../../assets/scss/forms.scss"
import GoBackButton from "../../UI/GoBackButton/GoBackButton"
import * as z from "zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"

const RegisterPage = () => {
    const schema = z.object({
        username: z.string()
            .nonempty({ message: "Enter a username" }),
        email: z.string()
            .nonempty({ message: "Enter an email" })
            .email(),
        dateOfBirth: z.string().date()
            .refine((data) => {
                const submitDate = new Date(data).getTime()
                const currentDate = new Date().getTime()

                return submitDate < currentDate
            }, { message: "Date of birth can't be greates than current date" }),
        password: z.string()
            .nonempty({ message: "Enter a password" })
            .min(8, { message: "Password must contain at least 8 characters" })
            .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, { message: "Password must contain both letters and numbers" }),
        password2: z.string()
            .nonempty({ message: "Confirm password" })
        })
        .refine((data) => data.password === data.password2, { message: "Passwords don't match" });
    
        type Schema = z.infer<typeof schema>;
    
        const { register, handleSubmit, formState: { errors } } = useForm<Schema>({
            resolver: zodResolver(schema)
        });
    
        useEffect(() => {
            console.log(errors)
        }, [errors])
    
        const onSubmit = async (data: Schema) => {
            const dataToSend = {
                ...data,
                ...JSON.parse(localStorage.getItem("savedAnswers") as string)
            }

            // deleting password2 because it's the same as password1
            delete dataToSend["password2"]
            console.log(dataToSend)

            axios.post("https://poorgym.onrender.com/signup", dataToSend, {
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(res => {
                if(res.status === 201) {
                    console.log("logged in")
                }
            })
        };

    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h1 className="title">Register</h1>
                <form action="POST" onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("username")} type="text" placeholder="Username" />
                    <div className="error">{errors.username?.message}</div>
                    <input {...register("email")} type="email" placeholder="Email" />
                    <div className="error">{errors.email?.message}</div>
                    <div className="field">
                        <p>Date of birth</p>
                        <input {...register("dateOfBirth")} type="date" />
                    </div>
                    <div className="error">{errors.dateOfBirth?.message}</div>
                    <input {...register("password")} type="password" placeholder="Password" />
                    <div className="error">{errors.password?.message}</div>
                    <input {...register("password2")} type="password" placeholder="Repeat password" />
                    <div className="error">{errors.password2?.message || errors.root?.message}</div>
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage