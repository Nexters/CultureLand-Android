import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({


        container: {
            width: "100%",
            height: "100%",
            backgroundColor: "#f6f6f6",
            paddingTop: calc.getRegHeightDp(24)

        },
        active_container: {
            width: "100%",
            height: "100%",
            backgroundColor: "#f6f6f6",
            paddingTop: calc.getRegHeightDp(46),


        },

        scrollable_tab_layout : {
            backgroundColor: "#f6f6f6"

        },
        // 카테고리 탭  레이아웃 관련 //
        scrollStyle: { // 탭 레이아웃 스타일
            marginTop: calc.getRegHeightDp(22),
            backgroundColor: "#f6f6f6",

            // paddingRight: 65,
            // justifyContent: 'center',
        },

        category_underline: {
            width: calc.getRegWidthDp(50),
            height: calc.getRegHeightDp(1.2),
            backgroundColor: "#f15642",
            borderRadius: 3,
        },
        // @@카테고리 탭  레이아웃 관련 끝//

        suggestion_text: {
            width: calc.getRegWidthDp(191),
            height: calc.getRegHeightDp(41),
            marginTop: calc.getRegHeightDp(72),
            marginLeft : calc.getRegWidthDp(85),
            marginRight : calc.getRegWidthDp(84),
            color : "#5c5c5c",
            fontSize: 18,
            textAlign:'center'

        },


        category_wrapper: {
            flexDirection: "row",
            width: "100%",
            height: calc.getRegHeightDp(59),
            marginBottom: calc.getRegHeightDp(34)
        },

        order_selector: {
            width: "100%",
            height: calc.getRegHeightDp(17),
            paddingRight: calc.getRegWidthDp(3),
            textAlign: 'right',
            fontSize: 14,
            fontWeight: "bold",


        },

        category_selector_item_wrapper: {
            flexDirection: 'column',
            width: calc.getRegWidthDp(96),
            height: calc.getRegHeightDp(59),
            paddingTop: calc.getRegHeightDp(8),
            paddingLeft: calc.getRegWidthDp(8),
            paddingRight: calc.getRegWidthDp(9),
            paddingBottom: calc.getRegHeightDp(4),
            marginTop: calc.getRegHeightDp(20),
            marginRight: calc.getRegWidthDp(6),
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#979797",

        },
        category_selector_item_icon: {
            width: calc.getRegWidthDp(37),
            height: calc.getRegHeightDp(25),
            marginBottom: calc.getRegHeightDp(6),
            backgroundColor: "#000",
        },

        category_selector_item_title: {
            fontSize: 14,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0.01,
        },


        category_item_wrapper: {
            flexDirection: 'column',
            width: "100%",
            height: calc.getRegHeightDp(94),
            marginRight: calc.getRegWidthDp(12),
            paddingTop: calc.getRegHeightDp(8),
            paddingLeft: calc.getRegWidthDp(12),
            paddingBottom: calc.getRegHeightDp(7),
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#979797",

        },
        category_item_icon: {
            width: calc.getRegWidthDp(28),
            height: calc.getRegHeightDp(28),
            marginBottom: calc.getRegHeightDp(17),
            backgroundColor: "#ab0",
        },


        bottom_wrapper: {
            flexDirection: 'column',
            paddingLeft: calc.getRegWidthDp(24),
            paddingRight: calc.getRegWidthDp(12),
            marginTop : calc.getRegHeightDp(9)
        },

        item_group_wrapper: {
            width: "100%",
            flexDirection: 'row',
            marginBottom : calc.getRegHeightDp(12)

        },


        item_wrapper: {
            width: calc.getRegWidthDp(96),
            height: calc.getRegHeightDp(136),
            marginRight : calc.getRegWidthDp(12),
            borderRadius : 10,
            backgroundColor : "#000"
        },

        item_information_labels_wrapper : {
            width: calc.getRegWidthDp(360-27-30),
            height: calc.getRegHeightDp(21),
            display : 'flex',
            flexDirection : 'row',
            marginTop : calc.getRegHeightDp(35.7),
            marginLeft: calc.getRegWidthDp(27),
            marginRight: calc.getRegWidthDp(30),

        },

        number_of_items : {
            width: calc.getRegWidthDp(74),
            height: calc.getRegHeightDp(21),
            fontSize: 16,

        },

        type_of_sorting : {
            width: calc.getRegWidthDp(48),
            height: calc.getRegHeightDp(21),
            marginLeft : 'auto'

        }


    });
}