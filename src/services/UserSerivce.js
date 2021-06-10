import axios from "../http-common";

const getAll = () => {
  return axios.get("/");
};

const create = data => {
  return axios.post("/", data);
};

const findByCountry = country => {
  return axios.get(`/?country=${country}`);
};

const getCountries =  ()=> {
  return axios.get('/countries');
};

const UserService = {
  getAll,
  create,
  findByCountry,
  getCountries
};

export default UserService;
