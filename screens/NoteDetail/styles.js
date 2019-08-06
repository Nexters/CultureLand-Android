import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth,screenHeight} from "../../App";


export default styles = function(screenWidth,screenHeight,calc) {


    return StyleSheet.create({
        container: {
            position: 'relative',
            width : "100%",
            height : "100%",
            backgroundColor: '#f6f6f6',
            paddingTop : calc.getRegHeightDp(56),
        },
        note_top_wrapper : {
            flex: 1,
            width: '100%',
            marginTop : calc.getRegHeightDp(3),
            paddingHorizontal : calc.getRegWidthDp(28),
        },
        image_wrapper : {
            flex: 1,
            height: calc.getRegHeightDp(212),
            borderRadius: 5,
            elevation: 5,
            overflow: 'hidden',
        },
        image : {
            width: '100%',
            height: calc.getRegHeightDp(300),
            backgroundColor: '#d8d8d8',
        },
        note_bottom_wrapper : {
            flex: 1,
            marginTop : calc.getRegHeightDp(29),
            paddingBottom : calc.getRegHeightDp(44),
            paddingHorizontal : calc.getRegWidthDp(28),
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
            backgroundColor: 'white',
            elevation: 5,
        },
        note_title : {
            marginTop : calc.getRegHeightDp(21),
            fontSize: 18,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: -0.37,
            color: "#393939",
        },
        note_line : {
            marginTop : calc.getRegHeightDp(3),
            width: '100%',
            height: calc.getRegHeightDp(1),
            borderStyle: "solid",
            borderBottomWidth: 1,
            borderColor: "#e9e9e9",
            overflow: 'hidden'
        },
        note_required : {
            marginTop : calc.getRegHeightDp(3),
            textAlign: 'right',
            fontSize: 10,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#f15642"
        },
        note_info_wrapper : {
            marginTop : calc.getRegHeightDp(22),
        },
        note_info_item : {
            flexDirection: 'row',
            alignItems: 'center',
            height : calc.getRegHeightDp(40),
        },
        note_sub_title : {
            width: calc.getRegWidthDp(62),
            fontSize: 14,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: -0.2,
            color: "#bbbbbb"
        },
        note_required_icon : {
            marginLeft: calc.getRegWidthDp(1),
            fontSize: 14,
            fontWeight: "500",
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#f15642"
        },
        note_textinput : {
            flex: 1,
            paddingHorizontal: calc.getRegWidthDp(9),
            fontSize: 16,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: -0.2,
            color: "#393939",
            textAlignVertical: "top",
            borderStyle: "solid",
            borderBottomWidth: 1,
            borderColor: "#e9e9e9"
        },
        // note_bottom_wrapper : {
        //     marginTop : calc.getRegHeightDp(45),
        // },
        note_textarea_wrapper : {
            marginTop: calc.getRegHeightDp(43),
        },
        note_textarea : {
            marginTop: calc.getRegHeightDp(7),
            fontSize: 14,
            fontWeight: "300",
            fontStyle: "normal",
            lineHeight: 24,
            letterSpacing: -0.1,
            color: "#2e2e2e",
            textAlignVertical: "top",
            borderStyle: "solid",
            borderBottomWidth: 1,
            borderColor: "#e9e9e9"
        }
    });
}