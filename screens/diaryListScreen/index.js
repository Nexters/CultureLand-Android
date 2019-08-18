
import {connect} from 'react-redux';
import template from './diaryListScreen';
import {getAdditionalList, getDiaryList} from "../../actions/diaryList";
import {getCultureList,getLoading,getError} from "../../selectors/diaryListSelector";
import {getCultureList} from "../../selectors/diaryListSelector";

function mapStateToProps(state) {

    return {
        cultureList : getCultureList(state),
        getLoading : getLoading(state),
        getError : getError(state),
    }
}

const mapDispatchToProps = {
     getDiaryList : getDiaryList.request,
     getAdditionalList : getAdditionalList.request,

};

export default connect(mapStateToProps,mapDispatchToProps)(template);

