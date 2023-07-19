import axios from "axios";
import { API_URL } from "../config/modules";

const header = (content_type="")=>{
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

class ContentServices {
    get(){
        return axios.get(API_URL + "/contents", header());
    }
    post(data){
        return axios.post(API_URL + "/contents", data, header("image"));
    }
    put(id, data){
        return axios.put(API_URL + "/contents/" + id, data, header("image"));
    }
    delete(id){
        return axios.delete(API_URL + "/contents/" + id, header());
    }
}

export default new ContentServices()