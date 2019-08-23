import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({
        container: {
            position: 'relative',
            width: "100%",
            height: "100%",
            backgroundColor: '#f6f6f6',
        },


        header: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            height: calc.getRegHeightDp(70),
            paddingHorizontal: calc.getRegWidthDp(23),
            fontSize: 16,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0.01,
            textAlign: "center",
            color: "#5c5c5c",
            backgroundColor: '#f6f6f6',
        },
        header_left: {
            flex: 1,
        },
        header_button: {
            // size: calc.getRegWidthDp(18),
        },
        header_center: {
            fontSize: 20,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: -0.41,
            textAlign: "center",
            color: "#464646"
        },
        header_right: {
            flex: 1,
        },
        header_right_text : {
            fontFamily: "noto-sans-bold",
            textAlign: 'right',
            fontSize: 16,
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#5c5c5c"
        },
        header_right_text_diasble : {
            fontFamily: "noto-sans-bold",
            textAlign: 'right',
            fontSize: 16,
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#c4c4c4"
        },
        note_wrapper : {
            
        },
        note_top_wrapper: {
            flex: 1,
            width: '100%',
            marginTop: calc.getRegHeightDp(72),
            paddingHorizontal: calc.getRegWidthDp(28),
        },
        image_wrapper: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: calc.getRegHeightDp(212),
            borderRadius: 5,
            elevation: 5,
            overflow: 'hidden',
            backgroundColor: '#fff',
        },
        image: {
            width: '100%',
            height: calc.getRegHeightDp(212),
        },
        image_icon_wrapper : {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: calc.getRegHeightDp(212),
            backgroundColor: '#fff',
        },
        image_icon : {
            width: calc.getRegWidthDp(92),
            height: calc.getRegHeightDp(92),
            alignSelf: "center",
        },
        note_bottom_wrapper: {
            flex: 1,
            marginTop: calc.getRegHeightDp(29),
            marginBottom: calc.getRegHeightDp(44),
            paddingBottom: calc.getRegHeightDp(44),
            paddingHorizontal: calc.getRegWidthDp(28),
            borderRadius: 22,
            backgroundColor: 'white',
            elevation: 5,
        },
        note_title: {
            flexDirection: 'row',
            alignItems: 'center',
            width: "100%",
            marginTop: calc.getRegHeightDp(21),
        },
        note_titleinput: {
            flex: 1,
            height: calc.getRegHeightDp(50),
            paddingLeft: calc.getRegWidthDp(4),
            fontFamily: "noto-sans-bold",
            fontSize: 18,
            fontStyle: "normal",
            lineHeight: calc.getRegHeightDp(30),
            letterSpacing: -0.37,
            color: "#393939",
            textAlignVertical: 'center',
        },
        note_titleinput_placeholder : {
            paddingLeft: calc.getRegWidthDp(4),
            fontFamily: 'noto-sans',
            fontSize: 18,
            fontStyle: "normal",
            lineHeight: calc.getRegHeightDp(30),
            textAlignVertical: 'center',
        },
        note_line: {
            marginTop: calc.getRegHeightDp(3),
            width: '100%',
            height: calc.getRegHeightDp(1),
            borderStyle: "solid",
            borderBottomWidth: 1,
            borderColor: "#e9e9e9",
            overflow: 'hidden'
        },
        note_required: {
            marginTop: calc.getRegHeightDp(3),
            fontFamily: "noto-sans",
            textAlign: 'right',
            fontSize: 10,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#f15642"
        },
        note_info_wrapper: {
            marginTop: calc.getRegHeightDp(22),
        },
        note_info_item: {
            flexDirection: 'row',
            alignItems: 'center',
            height: calc.getRegHeightDp(40),
            marginBottom: calc.getRegHeightDp(8),
        },
        note_sub_title: {
            width: calc.getRegWidthDp(62),
            fontFamily: "noto-sans",
            fontSize: 14,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: -0.2,
            color: "#bbbbbb"
        },
        note_required_icon: {
            paddingHorizontal: calc.getRegWidthDp(2),
            fontFamily: "noto-sans",
            fontSize: 14,
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#f15642"
        },
        note_textinput: {
            flex: 1,
            height: calc.getRegHeightDp(28),
            paddingHorizontal: calc.getRegWidthDp(9),
            fontFamily: "noto-sans",
            fontSize: 16,
            fontWeight: "normal",
            fontStyle: "normal",
            lineHeight: calc.getRegHeightDp(28),
            letterSpacing: -0.2,
            color: "#393939",
            textAlignVertical: "top",
            borderStyle: "solid",
            borderBottomWidth: 1,
            borderColor: "#e9e9e9"
        },
        note_picker_wrapper: {
            // alignItems: 'center',
            width: calc.getRegWidthDp(114),
            height: calc.getRegHeightDp(40),
            borderRadius: 2,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#e9e9e9",
        },
        note_picker: {
            flex: 1,
            paddingHorizontal: calc.getRegWidthDp(9),
            fontFamily: "noto-sans",
            fontSize: 16,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: -0.2,
            color: "#393939",
        },
        dropdown_text: {
            fontFamily: "noto-sans",
            fontSize: 16,
        },
        note_datepicker: {
            position: 'relative',
            width: calc.getRegWidthDp(160),
            height: calc.getRegHeightDp(40),
            paddingHorizontal: calc.getRegWidthDp(9),
            fontFamily: "noto-sans",
            fontSize: 16,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: -0.2,
            color: "#393939",
            textAlign: 'left',
            borderRadius: 2,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#e9e9e9",
        },
        note_datepicker_icon: {
            position: 'absolute',
            // borderWidth: 1,
            // borderColor: 'red',
            right: 0,
        },
        // note_bottom_wrapper : {
        //     marginTop : calc.getRegHeightDp(45),
        // },
        note_textarea_wrapper: {
            marginTop: calc.getRegHeightDp(43),
        },
        note_textarea: {
            marginTop: calc.getRegHeightDp(7),
            fontFamily: "noto-sans",
            fontSize: 14,
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