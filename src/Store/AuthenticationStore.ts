import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"


// const useAuthenticationStore = create((set) => {
//     results: ["hellol"],
//     addResult = (data) => set((state) => ({ results:  [...[state.results], data]}))
// })

type AuthenticationStore = {
    answers: string[],
    addAnswer(answer: string): void, 
    clearAnswers(): void,
    // getQuestionCount(): number,
    getAnswers(): string[],
}

const useAuthenticationStore = create<AuthenticationStore>()(
    persist(
        (set, get) => ({
            answers: [],
            addAnswer: (answer) => set({ answers: [...get().answers, answer] }),
            clearAnswers: () => set({ answers: [] }),
            getAnswers: () => { return get().answers }
        }),
        {
            name: "authentication",
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useAuthenticationStore