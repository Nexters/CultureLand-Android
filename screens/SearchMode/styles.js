import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({


        container: {
            width: calc.getRegWidthDp(320),
            height: calc.getRegHeightDp(44),
            marginTop : calc.getRegHeightDp(26),
            marginLeft : calc.getRegWidthDp(22),
            paddingLeft : calc.getRegWidthDp(13),
            paddingRight : calc.getRegWidthDp(13),
            backgroundColor:"#fff",
            borderRadius: 25.5,
            shadowColor: "#4ca0a0a0",
            flexDirection: 'row',
            alignItems: 'flex-end',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,

        },

        active_container: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            width: '100%',
            marginTop : calc.getRegHeightDp(46),
            paddingLeft  : calc.getRegWidthDp(9),
            paddingRight: calc.getRegWidthDp(22),
        },

        active_wrapper: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            width: calc.getRegWidthDp(295),
            height: calc.getRegHeightDp(44),
            paddingLeft  : calc.getRegWidthDp(13),
            backgroundColor:"#fff",
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

        input_text : {
            width: calc.getRegWidthDp(265),
            height: calc.getRegHeightDp(44),
        },

        active_input_text : {
            width: calc.getRegWidthDp(255),
            height: calc.getRegHeightDp(44),
        },

        back_button : {
            width: calc.getRegWidthDp(25),
            height: calc.getRegHeightDp(25),
            marginTop : calc.getRegHeightDp(15),
            marginBottom: calc.getRegHeightDp(6),

        },



        active_hor_line : {
            width : "100%",
            marginTop : calc.getRegHeightDp(20),
            borderBottomColor: '#dddddd',
            borderBottomWidth: 1,
        },

        active_scroll_view : {

        },

        active_search_result_wrapper    : {

            width: "100%",
            height : calc.getRegHeightDp(15.5+16.5+21),
            paddingTop : calc.getRegHeightDp(16.5),
            paddingLeft : calc.getRegWidthDp(45),
            paddingBottom : calc.getRegHeightDp(15.5),
            borderBottomColor: '#e9e9e9',
            borderBottomWidth: 1,
        },

        active_search_result_content : {
            width : "100%",
            height : calc.getRegHeightDp(21),
            fontSize : 16,

        },

        magnifying_glass : {
            width: calc.getRegWidthDp(20),
            height: calc.getRegHeightDp(20),
            marginTop : calc.getRegHeightDp(14),
            marginBottom: calc.getRegHeightDp(14),
        },

    });
}