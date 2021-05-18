import * as api from "../api/index"
//the actions made to the backend
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types'

export const getItems = () => async(dispatch) => {
    try {
        const { data } = await api.fetchAPI()
        dispatch({ type: GET_ITEMS, payload: data })
    } catch (error) {
        console.log('error fetching items', error)
    }
}
export const addItem = (name) => async(dispatch) => {
    try {
        const { data } = await api.addAPI({ name }) //this must always be called data!!!
        dispatch({ type: ADD_ITEM, payload: data })
    } catch (error) {
        console.log('error adding item', error)
    }
}
export const deleteItem = (id) => async(dispatch) => {

    try {
        await api.deleteAPI(id)
        dispatch({ type: DELETE_ITEM, payload: id })
    } catch (error) {
        console.log('error deleting item', error)
    }
}