import {connect} from 'react-redux';
import template from './myPageTemplate';
import {
    getUserId, getUserEmail, getTotalNumberOfDiaryCount,
    getLikedDiaryCount, getExhibitionCount,
    getConcertCount, getMusicalCount,
    getPlayCount, getEtcCount,
    getUserName,getError,
} from "../../selectors/myPageSelector";

import {getMyPageAccount,getMyPageCount} from '../../actions/myPage'
import {getDiaryList} from "../../actions/diaryList";

function mapStateToProps(state) {

    return {
        userId : getUserId(state),
        userName : getUserName(state),
        email : getUserEmail(state),
        totalCount : getTotalNumberOfDiaryCount(state),
        likedCount : getLikedDiaryCount(state),
        exhibitionCount : getExhibitionCount(state),
        musicalCount : getMusicalCount(state),
        concertCount : getConcertCount(state),
        playCount : getPlayCount(state),
        etcCount : getEtcCount(state),
        error : getError(state),
    }
}
const mapDispatchToProps = {
    getDiaryList : getDiaryList.request,
    getMyPageAccount : getMyPageAccount.request,
    getMyPageCount : getMyPageCount.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(template);

