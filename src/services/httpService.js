import axios from "axios";
import { toast } from "react-toastify";

import logger from "./logService.js";

axios.interceptors.response.use(null, (error) => {
  const expected =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expected) {
    toast.error("Some unexpected error occured");
    logger.log(error);
    return Promise.reject(error);
  }

  return Promise.reject(error);
});

export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt; // for setting token
}

export default {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
