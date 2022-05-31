import axios from 'axios';
import { setDefaultResultOrder } from 'dns';

export const api = axios.create({
    baseURL: 'https://meublogpessoalarasche.herokuapp.com/'

})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)

}

export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)

}
