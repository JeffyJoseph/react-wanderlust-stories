import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});
instance.defaults.headers.common["Authorization"] =
  "Client-ID 304c62a38e4226f6a6628136def79066d4a9eaf9e258614779e711b2416a3a36";
export default instance;
