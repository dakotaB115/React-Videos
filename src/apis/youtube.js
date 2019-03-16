import axios from "axios";

const KEY = "AIzaSyA0k3E-DHsVsGpaEWplXonC8qkkq9CGjkA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
