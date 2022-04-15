import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.0.2.2:3000'
    //http://10.0.2.2:3333
    //http://192.168.0.105:3000

})

export default api;