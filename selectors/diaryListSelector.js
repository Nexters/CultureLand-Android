import {diaryListRootAction} from "../reducers/diaryListReducer";

export function baseSelector(state){
    return state.diaryListReducer.diaryListRootAction;
}
export function getTitle(state){
    return baseSelector(state).listTitle;
}
export function getListType(state){
    return baseSelector(state).listType;
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