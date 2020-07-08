import axios from "axios";

const BASE_URL = "http://localhost:4000";

export function loginAPI(data) {
  return axios.post(`${BASE_URL}/api/login`, data);
}

export function registerAPI(data) {
  return axios.post(`${BASE_URL}/api/register`, data);
}

export function getUserBaseOnToken(token) {
  return axios.get(`${BASE_URL}/api/me`, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
}
