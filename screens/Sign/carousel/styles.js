import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../../util";
import {screenWidth, screenHeight} from "../../../App";


export default styles = function (screenWidth, screenHeight, calc) {
    return StyleSheet.create({
        slide_container: {
            width: "100%",
            height: calc.getRegHeightDp(490),
            paddingTop: calc.getRegHeightDp(50),
            backgroundColor: '#fff',
            shadowColor: "#4ca0a0a0",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 5,
        },
        slide_wrapper : {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        slide_image : {
            width: calc.getRegWidthDp(150),
            height: calc.getRegHeightDp(150),
        },
        slide_text : {
            fontFamily: "Noto Sans KR",
            fontWeight: "300",
            fontSize: 20,
            color: "#424242"
        },
    });
}