import {connect} from 'react-redux';
import template from './noteEditTemplate';
import {getNoteItem,createNoteItem} from "../../actions/noteItem";
import { getPlace,getWithWho,
    getImage,getContent,getIsLiked ,getCultureName,
    getSometime, getTitle} from "../../selectors/noteItemSelector";

function mapStateToProps(state) {
    return {
        title : getTitle(state),
        someTime : getSometime(state),
        place : getPlace(state),
        withWho : getWithWho(state),
        content : getContent(state),
        image : getImage(state),
        isLiked : getIsLiked(state),
        cultureName : getCultureName(state),
    }
}

const mapDispatchToProps = {
     createNoteItem : createNoteItem.request,
     getNoteItem : getNoteItem.request,
};

export default connect(mapStateToProps,mapDispatchToProps)(template);