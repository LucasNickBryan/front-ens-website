import axios from "axios";
import { header } from "./Auth.services";
import { API_URL } from "../config/modules";

class HistoryServices {
  get() {
    return axios.get(API_URL + "/content/getAll", header());
  }
}

export default new HistoryServices();
