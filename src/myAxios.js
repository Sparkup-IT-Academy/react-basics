import axios from "axios";


const myAxios = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

myAxios.interceptors.request.use((req) => {
    req.headers.Authorization = 'Bearer Your_Auth_Token';  // If api requires authorization
    return req;
});

myAxios.interceptors.response.use((res) => {
    return res;
})

export default myAxios;