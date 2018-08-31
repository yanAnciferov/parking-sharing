import axios from "axios";
import {DOMAIN} from "./constants/apiUrl";


axios.defaults.baseURL = DOMAIN;

export function updateAxiosHeaderAuthorization(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}