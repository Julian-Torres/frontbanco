import { axiosInstance } from "../helpers/axios-config";
import { UseState, UseEffect } from 'react'
//``


const getToken = () => {
    return localStorage.getItem("token")
}

const getUsuarios = () => {
    return axiosInstance.get('usuario', {
        headers: {
            'content-type': 'application/json',
            'Authorization': getToken()
        }
    })
}
const get1Usuarios = (usuarioId) => {
    return axiosInstance.get(`usuario/${usuarioId}`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': getToken()
        }
    })
}

const postUsuarios = (data) => {
    return axiosInstance.post('usuario', data, {
        headers: {
            'content-type': 'application/json',
            'Authorization': getToken()
        }
    })
}
const putUsuarios = (id, data) => {
    return axiosInstance.put(`usuario/${id}`, data, {
        headers: {
            'content-type': 'application/json',
            'Authorization': getToken()
        }
    })
}

const deleteUsuarios = (id) => {
    return axiosInstance.delete(`usuario/${id}`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': getToken()
        }
    })
}

export {
    getUsuarios, postUsuarios, get1Usuarios, deleteUsuarios, putUsuarios
}