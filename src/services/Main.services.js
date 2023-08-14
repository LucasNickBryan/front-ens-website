import axios from "axios";
import { API_URL } from "../config/modules";
import { header } from "./Auth.services";

class MainServices {
    get(data){
        return axios.get(API_URL + "/count", data, header("image"));
    }
}

export default new MainServices();