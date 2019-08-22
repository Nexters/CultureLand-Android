import {connect} from 'react-redux';
import template from './mainTemplate';
import {getMainCount, getMainWishList} from "../../actions/main";
import {getNoteList, getWishList, getLoading, getError, getYearType} from "../../selectors/mainSelector";
import {getDiaryList} from "../../actions/diaryList";

function mapStateToProps(state) {

    return {
        noteList : getNoteList(state),
        wishList : getWishList(state),
        getLoading : getLoading(state),
        yearType : getYearType(state),
        getError : getError(state),
    }
}

const mapDispatchToProps = {
    getMainCount : getMainCount.request,
    getMainWishList : getMainWishList.request,
    getDiaryList : getDiaryList.request,
};

export default connect(mapStateToProps,mapDispatchToProps)(template);

