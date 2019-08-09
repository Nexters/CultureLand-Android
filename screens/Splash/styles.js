import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({


        container: {
            width: "100%",
            height: 720,
            backgroundColor: "#f15642",
        },

        splash_image: {
            width : calc.getRegWidthDp(148),
            height : calc.getRegHeightDp(144.5),
            marginTop : calc.getRegHeightDp(222.8),
            marginLeft : calc.getRegWidthDp(106),
            marginRight : calc.getRegWidthDp(106),
            marginBottom : calc.getRegHeightDp(19.8),
            backgroundColor: "#fff",
        },

        splash_message : {
            width : calc.getRegWidthDp(97),
            marginLeft : calc.getRegWidthDp(132),
            marginRight : calc.getRegWidthDp(131),
            fontSize: 16,
            letterSpacing: -0.33,
            textAlign: "center",
            color: "#fff"
        },
        splash_bold : {
            fontWeight: 'bold',
        },
    });
}