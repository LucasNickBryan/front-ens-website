import axios from "axios";
import { API_URL } from "../config/modules";
import { header } from "./Auth.services";

class UserServices {
    signup(data){
        return axios.post(API_URL + "/user/signup", data, header("image"));
    }
    signin(data){
        return axios.post(API_URL + "/user/signin", data, header());
    }
    // logout(){
    //     return axios.get(API_URL + "/user/logout", header());
    // }
    get(){
        return axios.get(API_URL + "/user", header());
    }
    disable(id){
        return axios.put(API_URL + "/user/disable/" + id, [], header());
    }
    post(data){
        return axios.post(API_URL + "/user", data, header("image"));
    }
    put(id, data){
        return axios.put(API_URL + "/user/" + id, data, header("image"));
    }
    delete(id){
        return axios.delete(API_URL + "/user/" + id, header());
    }
}

export default new UserServices();