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
            paddingLeft : calc.getRegWidthDp(32),
            paddingRight : calc.getRegWidthDp(32),

        },

        suggestion_text : {
            width : calc.getRegWidthDp(191),
            height : calc.getRegHeightDp(41),
            marginTop : calc.getRegHeightDp(76)
        },

        search_bar: {
            width : calc.getRegWidthDp(296),
            height : calc.getRegHeightDp(40),
            marginTop : calc.getRegHeightDp(26),
            backgroundColor : "#000"
        },

        category_wrapper : {
            flexDirection : "row",
            width : "100%",
            height : calc.getRegHeightDp(59),
            marginBottom : calc.getRegHeightDp(34)
        },

        order_selector : {
            width : "100%",
            height : calc.getRegHeightDp(17),
            paddingRight : calc.getRegWidthDp(3),
            textAlign:'right',
            fontSize: 14,
            fontWeight: "bold",


        },

        category_selector_item_wrapper : {
            flexDirection : 'column',
            width : calc.getRegWidthDp(54),
            height : calc.getRegHeightDp(59),
            paddingTop : calc.getRegHeightDp(8),
            paddingLeft : calc.getRegWidthDp(8),
            paddingRight : calc.getRegWidthDp(9),
            paddingBottom : calc.getRegHeightDp(4),
            marginTop : calc.getRegHeightDp(20),
            marginRight : calc.getRegWidthDp(6),
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#979797",

        },
        category_selector_item_icon : {
            width : calc.getRegWidthDp(37),
            height : calc.getRegHeightDp(25),
            marginBottom : calc.getRegHeightDp(6),
            backgroundColor : "#000",
        },

        category_selector_item_title : {
            fontSize: 14,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0.01,
        },


        bottom_wrapper : {
            flexDirection : 'column',
            width : "100%",
            height : calc.getRegHeightDp(720-44-188),
            paddingTop : calc.getRegHeightDp(44),
            marginLeft: calc.getRegWidthDp(24),
            marginRight : calc.getRegWidthDp(24),
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
            borderRadius: 6,
            borderWidth: 1,
            backgroundColor: "#ffffff"

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