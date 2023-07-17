import axios from "axios";
import { API_URL } from "../config/env/env";

const header = ()=>{

    const user_token = localStorage.getItem('user_token')?localStorage.getItem('user_token'):'';
    const config = {
        headers: {
            Authorization: `Bearer ${user_token}`,
        }
    }
    return config;
}

class ContentServices {
    get(){
        return axios.get(API_URL + "/content/getAll");
    }
    post(data){
        return axios.post(API_URL + "/contents", data, header());
    }
}

export default new ContentServices()