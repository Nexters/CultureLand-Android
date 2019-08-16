import {
    GET_NOTE_ITEM,
    CREATE_NOTE_ITEM,
    UPDATE_NOTE_ITEM,
    REMOVE_NOTE_ITEM,
} from "../actionTypes/noteItem";
import {combineReducers} from 'redux';


const initialState = {
    loading: false,
    items: [],
    noteItemError : '',
};


export function getNoteItem(state = initialState, action) {
    switch (action.type) {
        // ------------- GET NOTE ITEM --------------
        case GET_NOTE_ITEM.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_NOTE_ITEM.SUCCESS:
            return {
                items: action.payload.reverse(),
                loading: false,
            };
        case GET_NOTE_ITEM.FAILURE:
            return {
                items: [],
                loading: false,
                getProductListError : action.error
            };
            
        // ------------- CREATE NOTE ITEM --------------
        case CREATE_NOTE_ITEM.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CREATE_NOTE_ITEM.SUCCESS:
            return {
                items: [action.payload].concat(state.items),
                loading: false,
            };
        case CREATE_NOTE_ITEM.FAILURE:
            return {
                ...state,
                loading: false,
                getProductListError : action.error
            };

        // ------------- UPDATE NOTE ITEM --------------
        case UPDATE_NOTE_ITEM.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_NOTE_ITEM.SUCCESS:
            const { id } = action.payload

            return {
                items: state.items.map(note => {
                    if (note.id === id) {
                        return { ...note }
                    }
                    return note
                }),
                loading: false
            };
        case UPDATE_NOTE_ITEM.FAILURE:
            return {
                ...state,
                loading: false,
                getProductListError : action.error
            };

        // ------------- DELETE NOTE ITEM --------------
        case REMOVE_NOTE_ITEM.REQUEST:
            return {
                ...state,
                loading: true,
            }
        case REMOVE_NOTE_ITEM.SUCCESS:
            return {
                ...state,
                items: state.items.filter(note => note.id !== note_id),
                loading: false,
            };
        case REMOVE_NOTE_ITEM.FAILURE:
            return {
                ...state,
                loading: false,
                getProductListError : action.error
            };
        default:
            return state
    }
}


export default combineReducers({
    getProductList

})