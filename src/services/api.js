import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    accept: 'application/json',
  },
});
const sheets = {
    getUsers: () => api.get("/Users"),
    getPosts: () => api.get("/Posts"),
    getTodos: () => api.get("/Todos"),
    
}

export default api;
