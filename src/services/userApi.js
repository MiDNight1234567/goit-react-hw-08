import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

const requestSignUp = async (formData) => {
  console.log(formData);
  const { data } = await instance.post("/users/signup", formData);
  setToken(data.token);
  console.log(data);
  return data;
};

const requestSignIn = async (formData) => {
  const { data } = await instance.post("/users/login", formData);
  setToken(data.token);
  return data;
};

const requestLogOut = async () => {
  const { data } = await instance.post("/users/logout");
  return data;
};

const requestGetCurrentUser = async () => {
  const { data } = await instance.get("/users/current");
  return data;
};

export {
  instance,
  setToken,
  requestSignUp,
  requestSignIn,
  requestLogOut,
  requestGetCurrentUser,
  clearToken,
};
