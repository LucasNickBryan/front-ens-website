import axios from "axios";
import { API_URL } from "../config/modules";
import { header } from "./Auth.services";

class PersonnalServices {
  get() {
    return axios.get(API_URL + "/staff/getAll", header());
  }
}

export default new PersonnalServices();
