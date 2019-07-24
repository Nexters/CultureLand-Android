import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth,screenHeight} from "../../App";


export default styles = function(screenWidth,screenHeight) {
    const calc = new RatioCalculator(screenWidth,screenHeight);



    return StyleSheet.create({


        container: {
            flex: 1,
            backgroundColor: '#fff',
        },

        main_starter_wrapper : {
            flex: 1,
            marginTop  : calc.getRegHeightDp(110),
            paddingHorizontal : calc.getRegWidthDp(32),
            backgroundColor: "#fff"
        },

        main_starter_title : {
            fontSize: 24,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#292929"
        },

        main_starter_image : {
            marginTop: calc.getRegHeightDp(43),
            width: "100%",
            height: calc.getRegHeightDp(344),
            borderRadius: 7,
            backgroundColor: "#d5d5d5"
        },

        slider : {
            marginTop  : calc.getRegHeightDp(110),
            overflow: 'visible'
        },

        main_wrapper : {
            flex: 1,
            marginTop  : calc.getRegHeightDp(72),
            backgroundColor: "#fff"
        },

        main_carousel_picker : {
            alignSelf : "center",
            width: calc.getRegWidthDp(100),
            fontSize: 24,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: -0.18,
            textAlign: "center",
            color: "#333333"
        },

        main_carousel_container : {
            flex: 1,
            marginTop  : calc.getRegHeightDp(23),
        }
    });
}