import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth,screenHeight} from "../../App";
import {StatusBar,Platform} from 'react-native';


export default styles = function(screenWidth,screenHeight) {
    const calc = new RatioCalculator(screenWidth,screenHeight);



    return StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            flex: 1,
            paddingTop: (Platform.OS === 'ios') ?(24) :(StatusBar.currentHeight),
            backgroundColor: '#f6f6f6',
        },
        main_top_wrapper: {
            marginTop  : calc.getRegHeightDp(51),
            paddingHorizontal : calc.getRegWidthDp(45),
        },
        main_picker : {
            fontFamily: "noto-sans-bold",
        },
        main_top_description: {
            fontFamily: "noto-sans",
            fontSize: 16,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: -0.33,
            color: "#a9a9a9",
        },
        main_top_date: {
            // display: "flex",
            marginLeft : calc.getRegWidthDp(7),
            color: "#5c5c5c",
        },
        main_starter_wrapper : {
            flex: 1,
            marginTop: calc.getRegHeightDp(177),
            textAlign: 'center',
        },
        main_starter_title : {
            fontFamily: "noto-sans-bold",
            fontSize: 18,
            fontStyle: "normal",
            lineHeight: 22,
            letterSpacing: -0.37,
            textAlign: "center",
            color: "#5c5c5c"
        },
        main_starter_subtitle : {
            marginTop: calc.getRegHeightDp(15),
            fontFamily: "noto-sans",
            fontSize: 14,
            fontStyle: "normal",
            lineHeight: 18,
            letterSpacing: -0.29,
            textAlign: "center",
            color: "#5c5c5c"
        },
        slider : {
            marginTop  : calc.getRegHeightDp(110),
            overflow: 'visible'
        },
        main_wrapper : {
            flex: 1,
        },  
        carousel_wrapper : {
            flex: 1,
            marginTop  : calc.getRegHeightDp(72),
        },
        main_title_line : {
            width: calc.getRegWidthDp(22),
            height: calc.getRegHeightDp(1),
            marginLeft : calc.getRegWidthDp(40),
            borderStyle: "solid",
            borderTopWidth: 2,
            borderColor: "#eb5a48"
        },
        main_title : {
            // width: calc.getRegWidthDp(54),
            // height: calc.getRegHeightDp(20),
            marginLeft : calc.getRegWidthDp(40),
            fontFamily: "noto-sans-bold",
            fontSize: 14,
            fontStyle: "normal",
            letterSpacing: -0.29,
            color: "#464646",
        },
        main_carousel_container : {
            flex: 1,
            marginTop: calc.getRegHeightDp(12),
        },
        wishlist_wrapper : {
            marginTop: calc.getRegHeightDp(60),
            paddingBottom : calc.getRegWidthDp(67),
        },
        wishlist_list : {
            flex: 1,
            
        },
        
    });
}