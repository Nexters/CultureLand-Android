import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth,screenHeight} from "../../App";
import {StatusBar} from 'react-native';


export default styles = function(screenWidth,screenHeight,calc) {


    return StyleSheet.create({
        container: {
            // overflow: 'hidden',
            width : "100%",
            height : "100%",
            // marginTop: StatusBar.currentHeight,
            paddingTop: calc.getRegHeightDp(56) + StatusBar.currentHeight,
            backgroundColor: '#f6f6f6',
        },
        header : {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            top: StatusBar.currentHeight,
            left: 0,
            right: 0,
            zIndex: 100,
            height: calc.getRegHeightDp(56),
            paddingHorizontal: calc.getRegWidthDp(23),
            fontSize: 16,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0.01,
            textAlign: "center",
            color: "#5c5c5c",
            backgroundColor: '#f6f6f6',
        },
        header_left : {
            flex: 1,
        },
        header_center : {
            fontSize: 20,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: -0.41,
            textAlign: "center",
            color: "#464646"
        },
        header_right : {
            flex: 1,
        },
    });
}