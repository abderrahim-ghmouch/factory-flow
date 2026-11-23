import axios from "axios"


const api = axios.create({
  


    baseURL: import.meta.env.VITE_API_URL,

    timeout: 1000,

    headers:{"content-Type":"application/json"}

})


api.interceptors.request.use((config) => {

    const token = sessionStorage.getItem("token")
    
    if(token)config.headers.Authorization=`Bearer ${token}`

    return config 
})
console.log("baseURL:", api.defaults.baseURL);
export default api
