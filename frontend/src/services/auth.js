import api from './api'

export const login = (email, password)=>{
    
    api.post('/auth/login').then((res)=>res.data)
}


export const logout = () =>{api.post('/auth/logout')}