import axios from "axios";
import {BASE_URL} from "../util/constants";
export const ClientApi = axios.create({
    baseURL: BASE_URL,
    timeout: 4000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true
});