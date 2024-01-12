import axios from 'axios'

export const api = axios.create({

    //Local api 
    baseURL:'https://spl2user-register-node.onrender.com/user',
  
    headers: {
      "Content-Type": "application/json",
      
    },
  })