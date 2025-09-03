export type UserDataType = {
    username: string,
    email: string,
    password: string,
    dateOfBirth: string,
    goalType: string,
    goalDescription: string,
    theoryState: string,
    workoutExperience: string,
    gender: string,
    measurementUnits: string,
    weight: string,
    height: string
}

export type LoginDataType = {
    email: string,
    password: string
}

export type ExerciseType = {
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    id: string,
    name: string,
    target: string,
    secondaryMuscles: string[],
    instructions: string[]
    description: string,
    difficulty: string,
    category: string
}