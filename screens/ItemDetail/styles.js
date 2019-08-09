import {StyleSheet} from "react-native";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({


        container: {
            width: "100%",
            height : "100%",
            paddingLeft: calc.getRegWidthDp(18),
            paddingRight: calc.getRegWidthDp(18),
            backgroundColor: '#333',

        },

        back_button: {
            width: calc.getRegWidthDp(33),
            height: calc.getRegHeightDp(33),
            marginTop: calc.getRegHeightDp(38),
        },

        center_image: {
            //width: calc.getRegWidthDp(183),
            //height: calc.getRegHeightDp(260),

            width: calc.getRegWidthDp(195),
            height: calc.getRegHeightDp(293),
            marginLeft : 'auto',
            marginRight : 'auto',
            marginTop: calc.getRegHeightDp(39),
            backgroundColor : "#fff",
        },

        bottom_info_wrapper: {
            flexDirection : 'column',
            width : calc.getRegWidthDp(324),
            height: calc.getRegHeightDp(207),
            paddingTop : calc.getRegHeightDp(26),
            marginTop : 74,
            marginBottom : calc.getRegHeightDp(22),
            borderRadius: 8,
            backgroundColor : "#fff",

        },

        title_row : {
            flexDirection : 'row',
            width : "100%",
            height : calc.getRegHeightDp(25),
            paddingLeft : calc.getRegWidthDp(25),
            paddingRight : calc.getRegWidthDp(11),
            marginBottom: 33
        },

        title : {
            width : calc.getRegWidthDp(173+65),
            height : 25,
            fontSize: 22,

        },

            star_button : {
            width : calc.getRegWidthDp(44),
            height: calc.getRegHeightDp(44),
            marginLeft : "auto",
        },

        info_row: {
            flexDirection : 'row',
            width : "100%",
            height : 24,
            paddingLeft : 25,
            marginBottom : 7,
        },

        row_title: {
            width : 30,
            height : 24,
            marginRight : 13,
            letterSpacing: 0.01,
            fontSize: 16,
            color : "#bbbbbb",
        },

        row_content: {
            width : calc.getRegWidthDp(324-30-13-69-10),
            height : 24,
            fontSize: 16,
            letterSpacing: 0.01,
            color: "#424242",

        }

    });
}