import axios from 'axios';

function createTask({
    name = "Exemplo",
    check = false,
    removed = false
}) {
    return axios.post(process.env.API + "/task", {
        name,
        check,
        removed,
    })
}

export default createTask;