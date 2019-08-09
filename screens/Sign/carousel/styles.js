import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight) {
    const calc = new RatioCalculator(screenWidth, screenHeight);


    return StyleSheet.create({


        container: {
            width: "100%",
            height: "100%",
            backgroundColor: '#fff',
        },

        phrase : {
            width: calc.getRegWidthDp(200),
            height : calc.getRegHeightDp(200),
            backgroundColor: "#000",
            marginLeft : calc.getRegWidthDp(30)
        },

        slide: {
        },

        image_wrapper: {
            width: calc.getRegWidthDp(500),
            height: calc.getRegHeightDp(500),
            backgroundColor: "#000"
        },

        image: {
            width: calc.getRegWidthDp(150),
            height: calc.getRegHeightDp(150),


    }


    });
}