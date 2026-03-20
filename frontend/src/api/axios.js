import axios from "axios";

const api = axios.create({
  baseURL: "https://librarymanagementsys-txvj.onrender.com/api",
});

export default api;