import axios from 'axios'

export const api = axios.create({

    //Local api 
    baseURL:'http://localhost:8000/user',
  
    headers: {
      "Content-Type": "application/json",
      
    },
  })