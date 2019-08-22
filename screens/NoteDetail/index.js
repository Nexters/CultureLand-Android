import {connect} from 'react-redux';
import template from './noteDetailTemplate';
import {createNoteItem, getNoteItem} from "../../actions/noteItem";
import {
     getContent, getIsLiked, getNote, getSometime, getTitle,
    getWithWho, getPlace, getImageUrl, getCultureName
} from "../../selectors/noteItemSelector";

function mapStateToProps(state) {
    return {
        title : getTitle(state),
        cultureName : getCultureName(state),
        sometime : getSometime(state),
        place : getPlace(state),
        withWho : getWithWho(state),
        content : getContent(state),
        image : getImageUrl(state),
        isLiked : getIsLiked(state),
    }
}

const mapDispatchToProps = {
     getNoteItem : getNoteItem.request,
     createNote : createNoteItem.request
};

export default connect(mapStateToProps,mapDispatchToProps)(template);