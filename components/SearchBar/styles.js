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

        input_text : {
            width: calc.getRegWidthDp(265),
            height: calc.getRegHeightDp(44),
        },
        magnifying_glass : {
            width: calc.getRegWidthDp(20),
            height: calc.getRegHeightDp(20),
            marginTop : calc.getRegHeightDp(14),
            marginBottom: calc.getRegHeightDp(14),
        }


    });
}