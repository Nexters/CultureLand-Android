
 function baseSelector(state){
    return state.itemDetailReducer.itemDetailRootAction;
}

export function getId(state){
    return baseSelector(state).id;
}
export function getImageUrl(state){
    return baseSelector(state).imageUrl;
}
export function getTitle(state){
    return baseSelector(state).title;
}
export function getCategory(state){
    return baseSelector(state).category;
}
export function getStartDate(state){
    return baseSelector(state).startDate;
}
 export function getEndDate(state){
     return baseSelector(state).endDate;
 }
export function getPlace(state) {
    return baseSelector(state).place;
}
export function getIsWished(state){
    return baseSelector(state).isWished;
}
export function getError(state){
    return baseSelector(state).error;
}