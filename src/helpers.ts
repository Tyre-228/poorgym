export const saveAnswer = (submitData: object, formNumber: number) => {
    const savedAnswers = JSON.parse(localStorage.getItem("savedAnswers") as string) || Array(6).fill("")
    savedAnswers[formNumber-1] = submitData
    
    localStorage.setItem("savedAnswers", JSON.stringify(savedAnswers))
}