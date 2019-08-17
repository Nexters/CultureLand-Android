
export function baseSelector(state){
    return state.itemDetailReducer.itemDetail;
}
export function getTitle(state){
    return baseSelector(state).title;
}
export function getCategory(state){
    return baseSelector(state).category;
}
export function getPeriod(state){
    return baseSelector(state).period;
}
export function getLocation(state) {
    return baseSelector(state).place;
}
export function getIsWished(state){
    return baseSelector(state).isWished;
}
export function getError(state){
    return baseSelector(state).error;
}