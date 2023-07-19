import axios from "axios";
import { API_URL } from "../config/modules";
import { header } from "./Auth.services";

class FunctionServices {
    get(){
        return axios.get(API_URL + "/occupation", header());
    }
    post(data){
        return axios.post(API_URL + "/occupation", data, header());
    }
    put(id, data){
        return axios.put(API_URL + "/occupation/" + id, data, header());
    }
    delete(id){
        return axios.delete(API_URL + "/occupation/" + id, header());
    }

}

export default new FunctionServices()