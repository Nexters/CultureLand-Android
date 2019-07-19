import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth,screenHeight} from "../../App";


export default styles = function(screenWidth,screenHeight,calc) {


    return StyleSheet.create({


        container: {
            width : "100%",
            height : "100%",
            backgroundColor: '#fff',
            paddingTop : calc.getRegHeightDp(24),

        },

        top_wrapper : {
            flexDirection : "column",
            width : "100%",
            height : calc.getRegHeightDp(188-24),
            paddingLeft : calc.getRegWidthDp(27),
            paddingRight : calc.getRegWidthDp(28),
            borderBottomColor : '#808a8a8a',
            borderBottomWidth : 1

        },

        user_name_text : {
            width : "100%",
            height : calc.getRegHeightDp(29),
            marginTop  : calc.getRegHeightDp(63-24),
            fontSize: 24,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#4c4c4c"
        },

        user_wrapper : {
            flexDirection : "row",
            width : "100%",
            height : calc.getRegHeightDp(20),
            marginTop  : calc.getRegHeightDp(7),
        },
        user_profile_image : {
            width : calc.getRegWidthDp(16),
            height : calc.getRegHeightDp(16),
            marginRight : calc.getRegWidthDp(3),
            backgroundColor : "#000"
        },

        user_email : {
            fontSize: 14,
            width : calc.getRegWidthDp(241),
            height : calc.getRegHeightDp(20),
            marginRight : calc.getRegWidthDp(3),
            fontWeight: "normal",
            fontStyle: "normal",
            lineHeight: 20,
            letterSpacing: 0,
            color: "#949494"
        },

        user_logout: {
            textAlign : 'right',
            width: calc.getRegWidthDp(40),
            height: calc.getRegHeightDp(15),
            fontSize: 12,
            fontWeight: "600",
            fontStyle: "normal",
            letterSpacing: -0.4,
            color: "#949494"
        },

        bottom_wrapper : {
            flexDirection : 'column',
            width : "100%",
            height : calc.getRegHeightDp(720-44-188),
            paddingTop : calc.getRegHeightDp(44)
        },

        item_pair_wrapper :{
            flexDirection : 'row',
            width : "100%",
            height : calc.getRegHeightDp(94),
            marginBottom : calc.getRegHeightDp(17)

        },


        category_left_wrapper : {
            flexDirection : 'column',
            width : "50%",
            height : "100%",
            paddingLeft : calc.getRegWidthDp(19),
            paddingRight : calc.getRegWidthDp(6),

        },

        category_right_wrapper : {
            flexDirection : 'column',
            width : "50%",
            height : "100%",
            paddingLeft : calc.getRegWidthDp(6),
            paddingRight : calc.getRegWidthDp(19),
        },


        category_item_wrapper : {
            flexDirection : 'column',
            width : "100%",
            height : calc.getRegHeightDp(94),
            marginRight : calc.getRegWidthDp(12),
            paddingTop : calc.getRegHeightDp(8),
            paddingLeft : calc.getRegWidthDp(12),
            paddingBottom : calc.getRegHeightDp(7),
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#979797",

        },
        category_item_icon : {
            width : calc.getRegWidthDp(28),
            height : calc.getRegHeightDp(28),
            marginBottom : calc.getRegHeightDp(17),
            backgroundColor : "#ab0",
        },

        category_item_title : {
            fontSize: 14,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#292929"
        },

        category_item_number :  {
            fontSize: 14,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#292929"

        },


    });
}