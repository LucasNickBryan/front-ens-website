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

class GalleryServices {
    get(){
        return axios.get(API_URL + "/galleries", header());
    }
    post(data){
        return axios.post(API_URL + "/galleries", data, header("image"));
    }
    put(id){
        return axios.put(API_URL + "/galleries/" + id, header("json"));
    }
    delete(id){
        return axios.delete(API_URL + "/galleries/" + id, header());
    }
}

export default new GalleryServices()