// this function saves data from the pre register forms to local storage
export const saveAnswer = (key: string, value: string) => {
    const savedAnswers = JSON.parse(localStorage.getItem("savedAnswers") as string) || {}
    console.log(savedAnswers)
    savedAnswers[key] = value
    
    localStorage.setItem("savedAnswers", JSON.stringify(savedAnswers))
}