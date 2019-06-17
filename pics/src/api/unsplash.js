import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ea237dfb9d765e3e07d5c5e6bf68b5cecef8a5c908ac1dfaf77b29f8d946bdaf"
  }
});
