import axios from "axios";
import { API_URL } from "../config/modules";
import { header } from "./Auth.services";

class PersonnelServices {
    get(){
        return axios.get(API_URL + "/staff", header());
    }
    post(data){
        return axios.post(API_URL + "/staff", data, header("image"));
    }
    put(id, data){
        return axios.put(API_URL + "/staff/" + id, data, header("image"));
    }
    delete(id){
        return axios.delete(API_URL + "/staff/" + id, header());
    }
}

export default new PersonnelServices()