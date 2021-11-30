import axios from 'axios';

export const getUsers = () => {
  return axios
    .get('http://localhost:8080/api/v1/users/')
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getUser = (id) => {
  return axios
    .get(`http://localhost:8080/api/v1/users/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const createUser = (name, email, password) => {
  return axios
    .post('http://localhost:8080/api/v1/users/', {
      name,
      email,
      password,
    })
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const updateUser = (id, name, email, password) => {
  return axios
    .put('http://localhost:8080/api/v1/users/', {
      id,
      name,
      email,
      password,
    })
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const deleteUser = (id) => {
  return axios
    .delete(`http://localhost:8080/api/v1/users/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
