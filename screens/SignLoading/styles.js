import {StyleSheet, Dimensions} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({


        container: {
            position: 'absolute',
            left: 0,
            top: 0,
            justifyContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: "#f15642",
        },

        thumbnail: {
            width: "100%",
            height: "100%",
            resizeMode: 'contain',
        },

        splash_image: {
            // width: 144,
            // marginBottom : 20,
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