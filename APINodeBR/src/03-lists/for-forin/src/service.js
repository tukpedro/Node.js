const axios = require("axios");

const URL = `https://swapi.dev/api/people`;

async function getPerson(name) {
  const url = `${URL}/?search=${name}&format=json`;
  const res = await axios.get(url);
  return res.data;
}

async function getData(url) {
  const res = await axios.get(url);
  return res.data;
}

module.exports = {
  getPerson,
  getData,
};
