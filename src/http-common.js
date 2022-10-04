import axios from "axios";


export default axios.create({
  baseURL: "http://induccion.local:8000",
  headers: {
    "Content-type": "application/json"
  }
});