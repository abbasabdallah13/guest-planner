import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const createUser = userInfo => API.post('/user/signup', userInfo);

export const login = loginInfo => API.post('/user/login', loginInfo)

export const forgotPassword = email => API.post(`/user/forgotPassword/${email}`)

export const updatePassword = (id,passwords) => API.post(`/user/updatePassword/${id}`, passwords)