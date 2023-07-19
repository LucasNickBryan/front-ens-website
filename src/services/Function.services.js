import axios from "axios";
import { API_URL } from "../config/modules";
import { header } from "./Auth.services";

class FunctionServices {
    get(){
        return axios.get(API_URL + "/occupation", header());
    }
    post(data){
        return axios.post(API_URL + "/occupation/create", data, header("image"));
    }
    put(id){
        return axios.put(API_URL + "/galleries/" + id, header("json"));
    }
    delete(id){
        return axios.delete(API_URL + "/galleries/" + id, header());
    }

}

export default new FunctionServices()