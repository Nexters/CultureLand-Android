import {connect} from 'react-redux';
import template from './myPageTemplate';
import {
    getUserId, getUserEmail, getTotalNumberOfDiaryCount,
    getLikedDiaryCount, getExhibitionCount,
    getConcertCount, getMusicalCount,
    getPlayCount, getEtcCount,
    getError,
} from "../../selectors/myPageSelector";

import {getMyPageAccount,getMyPageCount} from '../../actions/myPage'

function mapStateToProps(state) {

    return {
        userId : getUserId(state),
        userEmail : getUserEmail(state),
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
    getMyPageAccount : getMyPageAccount.request,
    getMyPageCount : getMyPageCount.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(template);

