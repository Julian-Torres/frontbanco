import axios from "axios";

export const getAuth = async (username, pass) => {

  const data = JSON.stringify({
    "email": username,
    "contrasena": pass
  });

  return axios.create({baseURL: 'http://localhost:4000/'})
  .post('login', data,
        {
          headers: { 
            'Content-Type': 'application/json'
          }
        }
  );
          
}
