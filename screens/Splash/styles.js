import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({


        container: {
            justifyContent: 'center',
            alignItems: 'center',
            width: "100%",
            height: "100%",
            backgroundColor: "#f15642",
        },

        splash_image: {
            marginBottom : calc.getRegHeightDp(19.8),
        },

        splash_message : {
            fontFamily: "Noto Sans KR",
            fontSize: 16,
            letterSpacing: -0.33,
            textAlign: "center",
            color: "#fff",
            lineHeight: 19,
        },
        splash_bold : {
            fontFamily: "Noto Sans KR",
            fontWeight: "700",
        },
    });
}