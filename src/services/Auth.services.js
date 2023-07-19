import axios from "axios";
import { API_URL } from "../config/modules";

export const header = (content_type="")=>{
    let content = ""
    switch (content_type) {
        case "image":
            content = "multipart/form-data"
            break;
        default:
            content = "application/json"
            break;
    }

    const user_token = localStorage.getItem('user_token')?localStorage.getItem('user_token'):'';
    const config = {
        headers: {
            Authorization: `Bearer ${user_token}`,
            'Content-Type': content,
            "Access-Control-Allow-Origin": "*",
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