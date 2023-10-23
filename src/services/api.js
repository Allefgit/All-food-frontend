import axios from "axios"

export const api = axios.create({
    baseURL: "https://allefood-6010fca7d08b.herokuapp.com/"
})

