import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth,screenHeight} from "../../App";


export default styles = function(screenWidth,screenHeight,calc) {


    return StyleSheet.create({


        container: {
            width : "100%",
            height : "100%",
            backgroundColor: '#fff',
            paddingTop : calc.getRegHeightDp(80),
            paddingBottom : calc.getRegHeightDp(50),
            paddingHorizontal : calc.getRegWidthDp(20),
        },
        note_wrapper : {
            flex: 1,
            // alignContent: "flex-end",
            paddingHorizontal : calc.getRegWidthDp(20),
            borderRadius: 7,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#979797",
            backgroundColor: "#ffffff",
        },
        note_title : {
            marginTop : calc.getRegHeightDp(30),
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0.01,
            textAlign: "left",
            color: "#292929"
        },
        note_image : {
            marginTop : calc.getRegHeightDp(16),
            height: calc.getRegHeightDp(168),
            backgroundColor: "#ebebeb"
        },
        note_top_container : {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop : calc.getRegHeightDp(23),
        },
        note_top_item : {
            flex: 1
        },
        note_sub_title : {
            fontSize: 14,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#292929"
        },
        note_top_text : {
            fontSize: 14,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#949494"
        },
        note_bottom_container : {
            marginTop : calc.getRegHeightDp(45),
        },
        note_bottom_text : {
            fontSize: 14,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#949494",
            textAlignVertical: "top"
        }
    });
}