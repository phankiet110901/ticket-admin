import axios from "axios";

let config = {};

if (localStorage.getItem("accessToken")) {
  config = {
    ...config,
    header: {
      Authorization: localStorage.getItem("accessToken"),
    },
  };
}

const Axios = axios.create(config);

export { Axios };
