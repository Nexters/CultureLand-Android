import {StyleSheet} from "react-native";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({


        container: {
            width: "100%",
            height : "100%",
            backgroundColor : "rgba(0, 0, 0, 0.5)",

        },

        back_button: {
            width: 25,
            height: 25,
            marginTop: 45,
            marginLeft : 22,
        },

        center_image: {
            width: calc.getRegWidthDp(195),
            height: calc.getRegHeightDp(293),
            marginLeft : 'auto',
            marginRight : 'auto',
            marginTop: 40,
            backgroundColor : "#fff",
        },

        bottom_info_wrapper: {
            flexDirection : 'column',
            width : calc.getRegWidthDp(324),
            height: 215,
            paddingTop : calc.getRegHeightDp(26),
            marginLeft : 18,
            marginTop : 50,
            marginBottom : 22,
            borderRadius: 8,
            backgroundColor : "#fff",
        },

        title_row : {
            flexDirection : 'row',
            width : "100%",
            height : 57,
            paddingLeft : calc.getRegWidthDp(25),
            paddingRight : calc.getRegWidthDp(11),
            marginBottom: 26
        },

        title : {
            fontFamily : 'noto-sans-bold',
            width : calc.getRegWidthDp(173+65),
            height : 57,
            fontSize: 22,
            lineHeight: 28,
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
            fontFamily : 'noto-sans-mid',
            width : 40,
            height : 24,
            marginRight : 13,
            letterSpacing: 0.01,
            fontSize: 16,
            color : "#bbbbbb",
            lineHeight: 18,
        },

        row_content: {
            fontFamily : 'noto-sans-demi',
            width : calc.getRegWidthDp(324-30-13-69-10),
            height : 24,
            fontSize: 16,
            letterSpacing: 0.01,
            color: "#424242",
            lineHeight: 18,

        }

    });
}