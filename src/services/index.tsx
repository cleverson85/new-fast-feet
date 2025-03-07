import axios from 'axios';
import { config } from "../config";

export const FastFeetApi = axios.create({
  baseURL: config.apiUrl,
});
