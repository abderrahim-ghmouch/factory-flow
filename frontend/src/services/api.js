import axios from "axios"


const api = axios.create({
  


    baseURL: import.meta.env.VITE_API_URL,

    timeout: 1000,

    headers:{"content-Type":"application/json"}

})

console.log("baseURL:", api.defaults.baseURL);
export default api

