import {CATEGORY,PRODUCT_LIST_FILTER} from "../../actionTypes/productList";
import { GET_PRODUCT_LIST } from "../../actionTypes/productList";
import {combineReducers} from 'redux';


const initialState = {
    product_list : [],
    category : CATEGORY.ALL_PRODUCT,
    filter : PRODUCT_LIST_FILTER.NEW,

};

export function getProduct( state = initialState, action ){
    switch(action.type){
        case GET_PRODUCT_LIST.REQUEST:
            break;
        default:
            return state
    }
}

export function searchProduct( state = initialState, action ){

}


export default combineReducers({
    searchItem

})