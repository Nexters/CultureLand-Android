export function baseSelector(state){
    return state.mainReducer.getMainNoteActions;
}
export function getNoteList(state){
    return baseSelector(state).noteList;
}
export function getWishList(state){
    return baseSelector(state).wishList;
}
export function getLoading(state){
    return baseSelector(state).loading;
}
export function getError(state){
    return baseSelector(state).error;
}
export function getYearType(state){
    return baseSelector(state).yearType;
}