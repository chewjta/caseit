import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-ecomm-23f2e.cloudfunctions.net/api", //the api (cloud function) url.
});

export default instance;

// http://localhost:5001/ecomm-23f2e/us-central1/api
