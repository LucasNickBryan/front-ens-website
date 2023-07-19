import axios from "axios";
import { API_URL } from "../config/modules";

const header = ()=>{

    const user_token = localStorage.getItem('user_token')?localStorage.getItem('user_token'):'';
    const config = {
        headers: {
            Authorization: `Bearer ${user_token}`,
        }
    }
    return config;
}

class AuthService {
    login(user_data){
        return axios.post(API_URL + "/login", user_data);
    }
    
    logout(){
        return axios.get(API_URL + "/logout", header());
    }
}

export default new AuthService()