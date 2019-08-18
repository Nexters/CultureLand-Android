export function baseSelector(state){
    return state.noteItemReducer.noteItemActions;
}
export function getNote(state){
    return baseSelector(state).note;
}
export function getTitle(state){
    return baseSelector(state).title;
}
export function getCategory(state){
    return baseSelector(state).category;
}
export function getSometime(state){
    return baseSelector(state).sometime;
}
export function getPlace(state) {
    return baseSelector(state).place;
}
export function getWithWho(state){
    return baseSelector(state).withWho;
}
export function getContent(state){
    return baseSelector(state).content;
}
export function getImage(state){
    return baseSelector(state).image;
}
export function getIsLiked(state){
    return baseSelector(state).isLiked;
}