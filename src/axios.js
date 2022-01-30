import axios from "axios";

const instance = axios.create({
  baseURL: 'https://localhost:5001/challenge-4b2b2/us-central1/api' // THE API (cloud function) URL
});

export default instance;
