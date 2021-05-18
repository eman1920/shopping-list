import axios from 'axios'

const url = "http://localhost:8000/items"

export const fetchAPI = () => axios.get(url)
export const addAPI = (newItem) => axios.post(url, newItem)
export const deleteAPI = (id) => axios.delete(`${url}/${id}`)