import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.3:3000'
    //ipconfig para mudar o end,
    //


})

export default api;