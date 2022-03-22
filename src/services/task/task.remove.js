import axios from 'axios';

function removeTask({
    id = "1",
}) {
    return axios.delete(process.env.API + "/task/" + id)
}

export default removeTask;