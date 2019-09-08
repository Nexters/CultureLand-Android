import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({


        container: {
            flex: 1,
            height: 44,
            marginTop: 26,
            marginLeft: 22,
            marginRight: 22,
            paddingLeft: 13,
            paddingRight: 13,
            backgroundColor: "#fff",
            borderRadius: 25.5,
            shadowColor: "#000",
            flexDirection: 'row',
            alignItems: 'flex-end',
            shadowOffset: {
                width: -4,
                height: 3,
            },
            shadowOpacity: 0.050,
            shadowRadius: 30,

            elevation: 3,

        },

        active_container: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            width: '100%',
            marginTop : calc.getRegHeightDp(22),
            paddingLeft  : calc.getRegWidthDp(9),
            paddingRight: calc.getRegWidthDp(22),
        },

        active_wrapper: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            height: calc.getRegHeightDp(44),
            paddingLeft: calc.getRegWidthDp(13),
            backgroundColor: "#fff",
            borderRadius: 25.5,
            shadowColor: "#4ca0a0a0",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },

        input_text: {
            width: calc.getRegWidthDp(265),
            height: calc.getRegHeightDp(44),
        },

        active_input_text: {
            width: calc.getRegWidthDp(255),
            height: calc.getRegHeightDp(44),
        },

        back_button: {
            width: calc.getRegWidthDp(25),
            height: calc.getRegHeightDp(25),
            marginTop: calc.getRegHeightDp(15),
            marginBottom: calc.getRegHeightDp(6),

        },


        active_hor_line: {
            width: "100%",
            marginTop: calc.getRegHeightDp(20),
            borderBottomColor: '#dddddd',
            borderBottomWidth: 1,
        },

        active_scroll_view: {},

        active_search_result_wrapper: {

            // height: 15.5 + 16.5 + 21,
            paddingTop: calc.getRegHeightDp(16.5),
            paddingLeft: 15,
            paddingBottom: calc.getRegHeightDp(15.5),
            borderBottomColor: '#e9e9e9',
            borderBottomWidth: 1,
        },
        number_of_items : {

            fontFamily : 'noto-sans',
            // width: calc.getRegWidthDp(74),
            // height: calc.getRegHeightDp(21),
            fontSize: 16,
            lineHeight: 19,
            marginTop : 35.7,
            marginLeft:  27,
            marginBottom : 11,

        },
        item_img_wrapper : {
            width: '100%',
            height: calc.getRegHeightDp(136),
        },
        item_text : {
            fontFamily : 'noto-sans',
            fontSize: 10,
            lineHeight: 24,
        },
        active_search_result_content: {
            fontFamily: 'noto-sans-mid',
            height: 21,
            fontWeight: "500",
            fontStyle: "normal",
            fontSize: 16,
            lineHeight: 21,
            letterSpacing: -0.53,
            color: "#424242"

        },

        magnifying_glass: {
            width: calc.getRegWidthDp(20),
            height: calc.getRegHeightDp(20),
            marginTop: calc.getRegHeightDp(14),
            marginBottom: calc.getRegHeightDp(14),
        },

        submit_scroll_view: {
            flex: 1, flexDirection: 'row',
            flexWrap: 'nowrap', justifyContent: 'space-between',
            paddingLeft: 24, paddingRight: 24,

        },

    });
}