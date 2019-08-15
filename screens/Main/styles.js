import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth,screenHeight} from "../../App";
import {StatusBar} from 'react-native';


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
            width: calc.getRegWidthDp(90),
            height: calc.getRegHeightDp(36),
            marginLeft : calc.getRegWidthDp(18),
            fontSize: 60,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: -0.49,
            color: "#464646",
            textAlign: "left",
            transform: [
                { scaleX: 1.6 }, 
                { scaleY: 1.6 },
            ],
            borderColor: 'red',
            borderWidth: 1,
        },
        main_top_description: {
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
            fontSize: 18,
            fontWeight: "bold",
            fontStyle: "normal",
            lineHeight: 20,
            letterSpacing: -0.37,
            textAlign: "center",
            color: "#5c5c5c"
        },
        main_starter_subtitle : {
            marginTop: calc.getRegHeightDp(15),
            fontSize: 14,
            fontWeight: "300",
            fontStyle: "normal",
            lineHeight: 15,
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
            borderWidth: 2,
            borderColor: "#eb5a48"
        },
        main_title : {
            // width: calc.getRegWidthDp(54),
            height: calc.getRegHeightDp(20),
            marginLeft : calc.getRegWidthDp(40),
            fontSize: 14,
            fontWeight: "bold",
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
            paddingHorizontal : calc.getRegWidthDp(36),
        },
        
    });
}