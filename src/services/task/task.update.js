import axios from 'axios';

function updateTask({
    id = "1",
    name = "Exemplo",
    check = false,
    removed = false
}) {
    return axios.put(process.env.API + "/task/" + id, {
        name,
        check,
        removed,
    })
}

export default updateTask;