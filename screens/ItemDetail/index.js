
import {connect} from 'react-redux';
import template from './ItemDetailTemplate';
import itemDetail from '../../actions/itemDetail';
import {getTitle, getCategory, getError, getIsWished, getPeriod, getLocation} from "../../selectors/itemDetailSelector";

function mapStateToProps(state) {

    return {
        title : getTitle(state),
        category : getCategory(state),
        period : getPeriod(state),
        location : getLocation(state),
        isWished : getIsWished(state),
        error : getError(state),
    }
}

const mapDispatchToProps = {
    getItemInfo : itemDetail.getItemInfo,
};

export default connect(mapStateToProps,mapDispatchToProps)(template);

