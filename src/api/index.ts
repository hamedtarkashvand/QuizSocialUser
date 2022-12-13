import axios from "axios"

 const coreApi = axios.create({
    baseURL: "http://localhost:3001/api"
});

export default coreApi