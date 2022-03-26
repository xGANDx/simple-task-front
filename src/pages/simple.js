import { useEffect, useState } from "react";
import allTask from "../services/task/task.all";
import createTask from "../services/task/task.create";

function Page() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        allTask().then(r => {
            setTasks(r.data);
        })
    }, [])

    function criar(nome) {
        createTask({
            name: nome,
            check: false,
            removed: false
        }).then(r => {
            setTasks([
                ...tasks,
                r.data
            ])
        })
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Insira"
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        criar(e.target.value);
                        e.target.value = "";
                    }
                }}
            />
            <br />
            {
                tasks.map((task, index) => {
                    return (
                        <div key={`task-${index}`}>{task.name}</div>
                    )
                })
            }
        </div>
    )
}

export default Page;