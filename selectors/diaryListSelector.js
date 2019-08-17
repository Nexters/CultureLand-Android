
export function baseSelector(state){
    return state.diaryListReducer.getDiaryList;
}
export function getCultureList(state){
    return baseSelector(state).culture_list;
}
export function getLoading(state){
    return baseSelector(state).loading;
}
export function getError(state){
    return baseSelector(state).error;
}