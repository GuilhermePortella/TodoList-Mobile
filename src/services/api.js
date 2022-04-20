import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.3:3000'
    //ipconfig para mudar o end,
    //192.168.1.4
    //192.168.1.3


})

export default api;