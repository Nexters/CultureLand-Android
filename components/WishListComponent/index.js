import {connect} from 'react-redux';
import template from './wishListTemplate';
import {getMainCount, getMainWishlist} from "../../actions/main";
import {getNoteList, getWishList, getLoading, getError} from "../../selectors/mainSelector";

function mapStateToProps(state) {

    return {
        noteList : getNoteList(state),
        wishList : getWishList(state),
        getLoading : getLoading(state),
        getError : getError(state),
    }
}

const mapDispatchToProps = {
    getMainCount : getMainCount.request,
    getMainWishlist : getMainWishlist.request,
};

export default connect(mapStateToProps,mapDispatchToProps)(template);

