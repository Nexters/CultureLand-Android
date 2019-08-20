import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth, screenHeight} from "../../App";
import {StatusBar, Platform} from 'react-native';


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({
        container: {
            position: 'relative',
            width: "100%",
            height: "100%",
            backgroundColor: '#f6f6f6',


            paddingTop: (Platform.OS === 'ios') ?
                (calc.getRegHeightDp(70) + 24) :
                (calc.getRegHeightDp(70) + StatusBar.currentHeight),
        },


        header: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            top:  (Platform.OS === 'ios') ?(24) :(StatusBar.currentHeight),
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
        note_wrapper : {
            
        },
        note_top_wrapper: {
            flex: 1,
            width: '100%',
            marginTop: calc.getRegHeightDp(3),
            paddingHorizontal: calc.getRegWidthDp(28),
        },
        image_wrapper: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: calc.getRegHeightDp(212),
            borderRadius: 5,
            elevation: 5,
            overflow: 'hidden',
            backgroundColor: '#fff',
        },
        image: {
            flex: 1,
            width: '100%',
            height: 'auto',
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
            minHeight: calc.getRegHeightDp(30),
            marginTop: calc.getRegHeightDp(21),
        },
        note_titleinput: {
            flex: 1,
            paddingLeft: calc.getRegWidthDp(4),
            fontFamily: "noto-sans-bold",
            fontSize: 18,
            fontStyle: "normal",
            letterSpacing: -0.37,
            color: "#393939",
            textAlignVertical: "top",
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
        note_sub_text : {
            width: calc.getRegWidthDp(230),
            fontFamily: "noto-sans",
            fontSize: 16,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: -0.2,
            color: "#393939",

        },
        note_required_icon: {
            fontFamily: "noto-sans",
            fontSize: 14,
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#f15642"
        },
        note_textinput: {
            flex: 1,
            paddingHorizontal: calc.getRegWidthDp(9),
            fontFamily: "noto-sans",
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
        note_picker_wrapper: {
            alignItems: 'center',
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