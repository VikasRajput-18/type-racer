const axios = require("axios");

let url = "https://api.quotable.io/random";

module.exports = getData = () => {
  return axios(url).then((response) => response.data.content.split(" "));
};
