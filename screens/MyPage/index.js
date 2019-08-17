import {connect} from 'react-redux';
import template from './myPageTemplate';
import {
    getUserId, getUserEmail, getTotalNumberOfDiaryCount,
    getLikedDiaryCount, getExhibitionCount,
    getConcertCount, getMusicalCount,
    getPlayCount, getEtcCount,
    getError,
} from "../../selectors/myPageSelector";

function mapStateToProps(state) {

    return {
        userId : getUserId(state),
        userEmail : getUserEmail(state),
        totalNumber : getTotalNumberOfDiaryCount(state),
        likedCount : getLikedDiaryCount(state),
        exhibitionCount : getExhibitionCount(state),
        concertCount : getConcertCount(state),
        playCount : getPlayCount(state),
        etcCount : getEtcCount(state),
        error : getError(state),
    }
}

const mapDispatchToProps = {
    getItemInfo: itemDetail.getItemInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(template);

