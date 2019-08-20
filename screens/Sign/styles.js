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
            height: calc.getRegHeightDp(490),
            backgroundColor: "#fff",
            shadowColor: "#4ca0a0a0",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
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
            width: 291,
            height : 230,
            paddingLeft : 77.5,
            marginRight: 77.5,
        },

        sign_social_service: {
            flexDirection: 'column',
            width: 76,
            height: 96,
            backgroundColor: "#ffffff",
        },

        sign_social_item_image: {
            marginLeft: 10.5,
        },

        sign_social_item_text: {
            fontFamily : 'noto-sans',
            paddingTop : 5,
            width: 76,
            height: 40,
            marginTop: 11,
            fontSize: 14,
            lineHeight: 14,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: -0.31,
            textAlign: "center",
            color: "#393939",
        },

    });
}