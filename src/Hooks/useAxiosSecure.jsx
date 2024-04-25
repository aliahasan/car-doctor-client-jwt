import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate()
  const { logOut} =  useContext(AuthContext)

    useEffect(() => {
        axiosSecure.interceptors.response.use((res) =>{
            return res
        }),
        (error) =>{
            console.log( 'error tracked in the inceptors' ,error.response)
            if(error.response.status ===401 || error.response.status === 403){
              console.log('logout  the user')
              logOut()
              .then(() =>{
                  navigate('/login')
              })
              .catch(error => console.log(error))
            }
        }

    }, [logOut ,navigate])
 
  return axiosSecure;

};

export default useAxiosSecure;
