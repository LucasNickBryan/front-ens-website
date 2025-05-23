import axios from "axios";
import { header } from "./Auth.services";
import { API_URL } from "../config/modules";

class HistoryServices {
  get() {
    return axios.get(API_URL + "/contents/history", header());
  }
}

export default new HistoryServices();
