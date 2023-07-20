import axios from "axios";
import { API_URL } from "../config/modules";
import { header } from "./Auth.services";

class UserServices {
    get(){
        return axios.get(API_URL + "/users", header());
    }
    post(data){
        return axios.post(API_URL + "/users", data, header("image"));
    }
    put(id, data){
        return axios.put(API_URL + "/users/" + id, data, header("image"));
    }
    delete(id){
        return axios.delete(API_URL + "/users/" + id, header());
    }
}

export default new UserServices();