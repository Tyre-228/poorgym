import { useStore } from "../Store/store"



const TestComponent = () => {
    const tasks = useStore((store) => store.tasks)


    return (
        <>
          <h2>Yopta</h2>
          {tasks.map((task) => (
            <div>
                <h2>{task.title}</h2>
                <p>{task.state}</p>
            </div>
          ))}
        </>
    )
}

export default TestComponent