import { create } from "zustand"

const store = () => ({
    tasks: [{ title: "Task 1", state: "Planned" }]
})

export const useStore = create(store)