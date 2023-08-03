import axios from "axios";
import { header } from "./Auth.services";
import { API_URL } from "../config/modules";

class ContactServices {
  contact(data) {
    return axios.post(API_URL + "/contact/sendEmail", data, header());
  }
}

export default new ContactServices();
