//fixed url in  variable api to use as genaral

import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3002', 
  headers: {
    'Content-Type': 'application/json', 
  },

});