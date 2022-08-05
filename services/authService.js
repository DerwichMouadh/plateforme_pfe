import http from './AxiosContext'


const create = (data)=>{
    return http.post("/auth/login" , data)
}
const register = (data)=>{
    return http.post("/auth/register" , data)
}

export default { create, register }