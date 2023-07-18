import axios from "axios";
import { API_URL } from "../config/env/env";

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

class PersonnelServices {
    get(){
        return axios.get(API_URL + "/personnels", header());
    }
    post(data){
        return axios.post(API_URL + "/personnels", data, header("image"));
    }
    put(id, data){
        return axios.put(API_URL + "/personnels/" + id, data, header("image"));
    }
    delete(id){
        return axios.delete(API_URL + "/personnels/" + id, header());
    }
}

export default new PersonnelServices()