import axios from 'axios';

function allTask() {
    return axios.get(process.env.API + "/task/all")
}

export default allTask;