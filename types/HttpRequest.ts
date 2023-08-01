import axios from "axios";
import { API_SECRET, API_URL } from "./Config";


const httpRequest = axios.create({
    baseURL: API_URL
})

httpRequest.interceptors.request.use(
    async (config) => {
        config.headers.token = API_SECRET

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

httpRequest.interceptors.response.use(
    (response) => {
        const data = response.data
        let retVal = null
        if (data.status == 'successful') {
            retVal = data.result
        } 
        return retVal
    },
    (error) => {
        return Promise.reject(error)
    }
)



export default httpRequest