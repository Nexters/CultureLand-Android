import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth,screenHeight} from "../../App";


export default styles = function(screenWidth,screenHeight) {
    const calc = new RatioCalculator(screenWidth,screenHeight);


    return StyleSheet.create({


        container: {
            width : "100%",
            height : "100%",
            backgroundColor: '#fff',
        },

        sign_illustrate_wrapper : {
            flexDirection : 'column',
            marginLeft : calc.getRegWidthDp(27),
            marginRight : calc.getRegWidthDp(26),
            marginTop  : calc.getRegHeightDp(63),
            width : calc.getRegWidthDp(307),
            height : calc.getRegHeightDp(354),
            backgroundColor: "#fff"

        },
        sign_illustrate_image : {
            width : "100%",
            height : calc.getRegHeightDp(354),
            borderRadius: 7,
            backgroundColor: "#d5d5d5"
        },
        sign_illustrate_carousel : {
            marginTop : calc.getRegHeightDp(19),
            width : "100%",
            height : calc.getRegHeightDp(8),
            backgroundColor : "#dab"
        },
        sign_social_select_wrapper:  {
            width : calc.getRegWidthDp(291),
            height : calc.getRegHeightDp(38*2 + 12),
            marginTop : calc.getRegHeightDp(100),
            marginLeft : calc.getRegWidthDp(35),
            marginRight : calc.getRegWidthDp(34),
        },
        sign_social_service: {
            flexDirection : "row",
            width : calc.getRegWidthDp(291),
            height: calc.getRegHeightDp(38),
            paddingLeft : calc.getRegWidthDp(75),

            backgroundColor: "#ffffff",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#d3d3d3"

        },

        sign_social_naver : {
            flexDirection : "row",
            width : calc.getRegWidthDp(291),
            height: calc.getRegHeightDp(38),
            paddingLeft : calc.getRegWidthDp(75),
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#d3d3d3",
            marginBottom : calc.getRegHeightDp(12),
            backgroundColor: "#ffffff",

        },


        sign_social_item_image : {
            width : calc.getRegWidthDp(21),
            height : calc.getRegHeightDp(21),
            marginTop : calc.getRegHeightDp(9),
            marginBottom : calc.getRegHeightDp(8),
            marginRight : calc.getRegWidthDp(8),
            backgroundColor : "#000"
        },
        sign_social_item_text : {
            width : calc.getRegWidthDp(150),
            height : calc.getRegHeightDp(15),
            marginTop : calc.getRegHeightDp(12),
            marginBottom : calc.getRegHeightDp(11),
            fontSize : 14,
            fontWeight: "600",
            fontStyle: "normal",
            letterSpacing: 0.01,
            color: "#7d7d7d"

        },

        sign_guide_wrapper : {
            flexDirection : 'row',
            width : "100%",
            height : calc.getRegHeightDp(15),
            paddingLeft : calc.getRegWidthDp(84),
            //paddingRight : calc.getRegWidthDp(84),
            marginTop : calc.getRegHeightDp(19),
        },

        sign_guide_message : {
                width: calc.getRegWidthDp(160),
                height: calc.getRegHeightDp(15),
              //  fontFamily: "AppleSDGothicNeo",
                fontSize: 13,
                fontWeight: "normal",
                fontStyle: "normal",
                color: "#8e8e8e"
        },
        sign_guide_message_btn : {
            width: calc.getRegWidthDp(45),
            height: calc.getRegHeightDp(15),
          //  fontFamily: "AppleSDGothicNeo",
            fontSize: 13,
            fontWeight: "600",
            fontStyle: "normal",
            color: "#353535"
        },



    });
}