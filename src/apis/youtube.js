import axios from "axios";

const KEY = "AIzaSyCNX6zuB6ssK3rTHCyEPqnal5x_fK308ms";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
