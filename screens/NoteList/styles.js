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


    });
}