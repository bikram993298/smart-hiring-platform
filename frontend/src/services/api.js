import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const getCandidates = () => API.get("/candidates");
export const addCandidate = (candidate) => API.post("/candidates", candidate);
export const login = (data) => API.post("/auth/login", data);
