import axios from "axios";
import { API_URL } from "../config/modules";
import { header } from "./Auth.services";

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