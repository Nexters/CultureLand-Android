
import {connect} from 'react-redux';
import template from './ItemDetailTemplate';
import {getItemDetailAction,isWishedAction,setWishedAction,cancelWishedAction} from '../../actions/itemDetail';
import {getTitle,getImageUrl, getCategory, getError, getIsWished, getPeriod, getPlace} from "../../selectors/itemDetailSelector";

function mapStateToProps(state) {


    return {
        imageUrl : getImageUrl(state),
        title : getTitle(state),
        category : getCategory(state),
        period : getPeriod(state),
        place : getPlace(state),
        isWished : getIsWished(state),
        error : getError(state),
    }
}

const mapDispatchToProps = {
    getItemInfo : getItemDetailAction.request,
    isWishedRequest : isWishedAction.request,
    setWishedRequest : setWishedAction.request,
    cancelWishedRequest : cancelWishedAction.request,

};

export default connect(mapStateToProps,mapDispatchToProps)(template);

