import axios from 'axios'

const url = "https://eman1920-shopping-list.herokuapp.com/items"

export const fetchAPI = () => axios.get(url)
export const addAPI = (newItem) => axios.post(url, newItem)
export const deleteAPI = (id) => axios.delete(`${url}/${id}`)