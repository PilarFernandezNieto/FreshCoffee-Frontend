/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import clienteAxios from "../config/axios";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

export const useAuth = ({ middleware, url }) => {

    const token = localStorage.getItem('AUTH_TOKEN');
    const navigate = useNavigate();

    const {data: user, error, mutate} = useSWR('/api/user', () => 
        clienteAxios('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors);
        })
    );

    const login = async (datos, setErrores) => {
        try {
            const { data } = await clienteAxios.post("/api/login", datos);
            localStorage.setItem('AUTH_TOKEN', data.token)
            setErrores([]);
            await mutate();

        } catch (error) {
            console.log(error);
            setErrores(Object.values(error.response.data.errors));
        }
    }

    const registro = () => {

    }

    const logout = () => {

    }

    console.log(user)
    console.log(error)

    useEffect(() => {
        if(middleware === 'guest' && url && user){
            navigate(url);
        }
    }, [user, error])

    
    return {
        login,
        registro,
        logout
    }


}