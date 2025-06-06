import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import GoBackButton from "../../UI/GoBackButton/GoBackButton"
import { useNavigate } from "react-router"
import axios from "axios"

const NewWorkoutForm = () => {
    const navigate = useNavigate()
    const schema = z.object({
        workoutName: z.string()
            .min(2, "This field must contain at least 2 characters"),
        day: z.string(),
        muscles: z.string()
            .min(2, "This field must contain at least 2 characters")
            .regex(/^[A-Za-z]+$/, {
                message: "Only letters are allowed",
            }),
    })

    type Schema = z.infer<typeof schema>

    const { register, handleSubmit, setError, formState: { errors } } = useForm<Schema>({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: Schema) => {
        axios.post("https://poorgym.onrender.com/workoutPlan", data)
        .then((res => {
            if(res.status === 201) {
                navigate("/workoutEditor")
            }
            else {
                setError("muscles", {
                    type: "custom",
                    message: "Something went wrong. Try again"
                })
            }
        }))
        .catch(error => {
            const errorMessage = error.response.data.error

            setError("workoutName", {
                type: "custom",
                message: errorMessage
            })
        })
    }

    return (
        <div className="page">
            <div className="goBack">
                <GoBackButton/>
            </div>
            <div className="content">
                <h2 className="title">Create new workout</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("workoutName")} type="text" placeholder="Workout name" required />
                    <div className="error">{errors.workoutName?.message}</div>
                    <select {...register("day")} name="day" id="day">
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                        <option value="any">Any</option>
                    </select>
                    <div className="error">{errors.day?.message}</div>
                    <input {...register("muscles")} type="text" placeholder="Muscles" required />
                    <div className="error">{errors.muscles?.message}</div>
                    <button className="submit primaryButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NewWorkoutForm