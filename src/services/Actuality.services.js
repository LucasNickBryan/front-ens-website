import axios from "axios";
import { header } from "./Auth.services";
import { API_URL } from "../config/modules";

class ActualityServices {
  get() {
    return axios.get(API_URL + "/contents/actuality", header());
  }
}

export default new ActualityServices();
