import Types from '../../actionTypes/actionTypes';
import {combineReducers} from 'redux';

export function status( state = {}, action ){
    switch(action.type){
        case Types.SENDING_REQUEST:
            return { ...state, isLoading : action.isLoading};
        case Types.REQUEST_ERROR:
            return {...state, error : action.error};
        default:
            return state
    }
}

export default combineReducers({
    status
})

