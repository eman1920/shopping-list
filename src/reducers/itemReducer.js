import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'


const itemReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ITEMS:
            return action.payload;
        case ADD_ITEM:
            return [...state, action.payload]
        case DELETE_ITEM:
            return state.filter(item => item._id !== action.payload)
        default:
            return state;
    }
}

export default itemReducer