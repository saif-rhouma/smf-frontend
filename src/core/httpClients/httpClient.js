import axios from "axios";
import environment from "../configs/environment";

const httpClient = axios.create({
  baseURL: environment.coreURL,
});

export default httpClient;
