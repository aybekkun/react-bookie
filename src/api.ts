import axios from "axios"

const instance = axios.create({
    baseURL: "http://bookie.eco-study.uz/",
})

export const api = {
    registration(phone: string, name: string , password: string) {
        return instance.post(`api/register`, {
            phone,
            name,
            password
        })
    },
    login(phone: string, password: string){
        return instance.post(`api/login`, {
            phone,
            password
        })
    }
}