import axios from "axios";
import { API_URL } from "../config/modules";
import { header } from "./Auth.services";
class GalleryServices {
    get(){
        return axios.get(API_URL + "/pictures", header());
    }
    post(data){
        return axios.post(API_URL + "/pictures", data, header("image"));
    }
    put(id){
        return axios.put(API_URL + "/pictures/" + id, [], header());
    }
    delete(id){
        return axios.delete(API_URL + "/pictures/" + id, header());
    }
}

export default new GalleryServices()