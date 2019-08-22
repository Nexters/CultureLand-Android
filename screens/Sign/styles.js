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
        sign_illustrate_wrapper: {
            flexDirection: 'column',
            width: '100%',
            backgroundColor: "#fff",
        },
        sign_illustrate_image: {
            width: "100%",
            height: calc.getRegHeightDp(354),
            borderRadius: 7,
            backgroundColor: "#d5d5d5"
        },
        sign_illustrate_carousel : {
            marginTop : calc.getRegHeightDp(10),
            marginBottom : calc.getRegHeightDp(500),
            width : "100%",
            height : calc.getRegHeightDp(8),
            backgroundColor : "#dab"
        },
        getting_start_text: {
            color: "#424242",
            marginTop : calc.getRegHeightDp(30),
            marginLeft: calc.getRegWidthDp(40),
            marginBottom : calc.getRegHeightDp(7),
            opacity: 0.5,
            fontSize: 12,
        },
        sign_social_select_wrapper: {
            flexDirection: 'row',
            justifyContent : 'space-between',
            width: '100%',
            paddingHorizontal: 88,
        },
        sign_social_service: {
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: "#ffffff",
        },
        sign_social_item_image: {
            width: 56,
            height: 56,
        },
        sign_social_item_text: {
            fontFamily : 'noto-sans',
            marginTop: 11,
            fontSize: 14,
            fontWeight: "normal",
            fontStyle: "normal",
            lineHeight: 16,
            textAlign: "center",
            color: "#393939",
        },
    });
}