import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://kanban-hadi.herokuapp.com/'
    
  });
module.exports = instance