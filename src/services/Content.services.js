import axios from "axios";
import { API_URL } from "../config/modules";
import { header } from "./Auth.services";

class ContentServices {
    get(){
        return axios.get(API_URL + "/contents", header());
    }
    getHistory(){
        return axios.get(API_URL + "/contents/history", header());
    }
    getActuality(){
        return axios.get(API_URL + "/contents/actuality", header());
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