
import {connect} from 'react-redux';
import template from './diaryListScreen';
import {cancelLiked, getAdditionalList, getDiaryList, setLiked} from "../../actions/diaryList";
import {getCultureList,getLoading,getError,getListType,getTitle} from "../../selectors/diaryListSelector";
import { getNoteItem} from "../../actions/noteItem";


function mapStateToProps(state) {

    return {
        listTitle  : getTitle(state),
        listType : getListType(state),
        cultureList : getCultureList(state),
        getLoading : getLoading(state),
        getError : getError(state),
    }
}

const mapDispatchToProps = {
     setLiked : setLiked.request,
     cancelLiked : cancelLiked.request,
     getNoteItem : getNoteItem.request,
     getDiaryList : getDiaryList.request,
     getAdditionalList : getAdditionalList.request,

};

export default connect(mapStateToProps,mapDispatchToProps)(template);

