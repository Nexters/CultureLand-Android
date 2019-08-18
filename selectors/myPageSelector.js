
export function baseSelector(state){
    return state.myPageReducer.myPageRootAction;
}
export function getUserId(state){
    return baseSelector(state).userId;
}
export function getUserEmail(state){
    return baseSelector(state).userEmail;
}
export function getTotalNumberOfDiaryCount(state){
    return baseSelector(state).totalNumberOfDiaryCount;
}
export function getLikedDiaryCount(state){
    return baseSelector(state).likedDiaryCount;
}
export function getExhibitionCount(state){
    return baseSelector(state).exhibitionCount;
}
export function getConcertCount(state){
    return baseSelector(state).concertCount;
}
export function getMusicalCount(state){
    return baseSelector(state).musicalCount;
}
export function getPlayCount(state){
    return baseSelector(state).playCount;
}
export function getEtcCount(state){
    return baseSelector(state).etcCount;
}
export function getError(state){
    return baseSelector(state).error;
}