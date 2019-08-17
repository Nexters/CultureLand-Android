import {connect} from 'react-redux';
import template from './NoteDetailTemplate';
import {getNoteItem} from "../../actions/noteItem";
import {getTitle, getCategory, getSometime, getPlace, getWithWho, getContent, getImage, getIsLiked} from "../../selectors/noteItemSelector";

function mapStateToProps(state) {
    return {
        title: getTitle(state),
        category: getCategory(state),
        sometime: getSometime(state),
        place: getPlace(state),
        withWho: getWithWho(state),
        content: getContent(state),
        image: getImage(state),
        isLiked: getIsLiked(state),
    }
}

const mapDispatchToProps = {
     getNoteItem : getNoteItem.request,
};

export default connect(mapStateToProps,mapDispatchToProps)(template);