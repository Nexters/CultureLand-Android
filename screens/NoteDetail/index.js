import {connect} from 'react-redux';
import template from './noteDetailTemplate';
import {getNoteItem} from "../../actions/noteItem";
import {getNote} from "../../selectors/noteItemSelector";

function mapStateToProps(state) {
    return {
        note: getNote(state),
    }
}

const mapDispatchToProps = {
     getNoteItem : getNoteItem.request,
};

export default connect(mapStateToProps,mapDispatchToProps)(template);