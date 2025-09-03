import { ExerciseType } from "../../globalTypes"
import axios from "axios"

class ExerciseService {

    // change the method so it can take both name and muscle as parameter
    public async getExercise(id: string) {
        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
            headers: {
                'x-rapidapi-key': process.env.RAPID_API_KEY,
                'x-rapidapi-host': process.env.RAPID_API_HOST
            }
        }

        let response

        try {
            response = await axios.request(options) as any
        } catch (error) {
            console.error(error)
            return { error: "Server error", status: 500 }
        }

        return { data: response.data}
    }

    public async getExercises(name: string  = "", muscleGroup: string = "", limit: number = 20, offset: number = 0) {
        let url = `https://${process.env.RAPID_API_HOST}/exercises?`

        if(name) {
            url = `https://${process.env.RAPID_API_HOST}/exercises/name/${name}?`
        }
        else if(muscleGroup) {
            url = `https://${process.env.RAPID_API_HOST}/exercises/target/${muscleGroup}?`
        }

        url = url + `limit=${limit}&`
        url = url + `offset=${offset}`

        const options = {
            method: 'GET',
            url: url,
            headers: {
                'x-rapidapi-key': process.env.RAPID_API_KEY,
                'x-rapidapi-host': process.env.RAPID_API_HOST
            }
        }

        let response

        try {
            response = await axios.request(options) as any
        } catch (error) {
            console.error(error)
            return { error: "Server error", status: 500 }
        }

        const data = response.data.map((exercise: ExerciseType) => {
            return {
                "id": exercise.id,
                "name": exercise.name,
                "bodyPart": exercise.bodyPart,
                "gifUrl": exercise.gifUrl
            }
        })
        
        return { data: data }
    }
}

export default new ExerciseService()