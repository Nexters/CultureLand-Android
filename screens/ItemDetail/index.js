
import {connect} from 'react-redux';
import template from './ItemDetailTemplate';
import {getItemDetailAction,isWishedAction,setWishedAction,cancelWishedAction} from '../../actions/itemDetail';
import {getTitle,getImageUrl, getCategory, getError, getIsWished, getStartDate,getEndDate, getPlace,getId} from "../../selectors/itemDetailSelector";

function mapStateToProps(state) {


    return {
        id : getId(state),
        imageUrl : getImageUrl(state),
        title : getTitle(state),
        category : getCategory(state),
        startDate  : getStartDate(state),
        endDate : getEndDate(state),
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

