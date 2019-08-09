import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({


            container: {
                width: "100%",
                height: 720,
            },

            top_wrapper: {
                flexDirection: "column",
                width: "100%",
                height: calc.getRegHeightDp(167),
                paddingTop: calc.getRegHeightDp(47.4),
                paddingLeft: calc.getRegWidthDp(39),
                paddingRight: calc.getRegWidthDp(28),
                backgroundColor: "#fff"

            },

            user_name_text:
                {
                    width: "100%",
                    height: calc.getRegHeightDp(29),
                    fontSize: 24,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    letterSpacing: 0.01,
                    color:
                        "#4c4c4c"
                },

            user_wrapper: {
                flexDirection: "row",
                width: "100%",
                height: calc.getRegHeightDp(20),
                marginTop: 2.2,
            },

            user_email: {
                fontSize: 14,
                width: calc.getRegWidthDp(241),
                height: calc.getRegHeightDp(20),
                marginRight: 3,
                fontWeight: "normal",
                fontStyle: "normal",
                lineHeight: 20,
                letterSpacing: 0,
                color: "#949494"
            },

            user_logout: {
                textAlign: 'right',
                width: calc.getRegWidthDp(40),
                height: calc.getRegHeightDp(15),
                fontSize: 12,
                fontWeight: "600",
                fontStyle: "normal",
                letterSpacing: -0.4,
                color: "#949494"
            },

            number_of_data_wrapper: {
                flexDirection: 'row',
                width: "100%",
                height: calc.getRegHeightDp(22),
                marginTop: 20.4,
            },

            data_symbol: {
                width: calc.getRegWidthDp(22),
                height: calc.getRegHeightDp(22),
                marginRight: 5,
                backgroundColor: "#000"
            },

            number_of_data_title: {
                width: calc.getRegWidthDp(70),
                height: calc.getRegHeightDp(20),
                marginRight: 5,
                fontSize: 14,

            },

            number_of_data_content: {
                width: "100%",
                height: calc.getRegHeightDp(20),
                fontSize: 15,
                fontWeight: "500",
            },

            bottom_wrapper: {
                flexDirection: 'column',
                width: "100%",
                height: calc.getRegHeightDp(493),
                paddingTop: calc.getRegHeightDp(30),
                backgroundColor: "#f6f6f6",
                shadowRadius: 2,
                shadowColor: "black",
                shadowOpacity: 0.091,
                shadowOffset: {width: 0, height: -3},
            }
            ,

            item_pair_wrapper: {
                flexDirection: 'row',
                width: "100%",
                height: calc.getRegHeightDp(124),
                marginBottom: calc.getRegHeightDp(17),

            },

            category_left_wrapper: {
                flexDirection: 'column',
                width: "50%",
                paddingLeft: 37,
                paddingRight: 6,
            },

            category_right_wrapper: {
                flexDirection: 'column',
                width: "50%",
                paddingLeft: 6,
                paddingRight: 40,
            },

            category_item_wrapper: {
                flexDirection: 'column',
                width: calc.getRegWidthDp(133),
                height: calc.getRegHeightDp(124),
                marginRight: calc.getRegWidthDp(12),
                marginBottom: calc.getRegHeightDp(13),
                paddingTop: calc.getRegHeightDp(8),
                paddingLeft: calc.getRegWidthDp(12),
                paddingRight: calc.getRegHeightDp(11.5),
                borderRadius: 6,
                backgroundColor: "#fff",
                shadowRadius: 4,
                shadowColor: "black",
                shadowOpacity: 0.07,
                shadowOffset: {width: -2, height: 2},

            },


            category_item_icon: {
                width: calc.getRegWidthDp(36.6),
                height: calc.getRegHeightDp(44),
                marginBottom: calc.getRegHeightDp(1),
                backgroundColor: "#ab0",
            },


            category_item_content_wrapper: {
                flexDirection: 'row',
                width: '100%',
                height: calc.getRegHeightDp(33),
                paddingBottom : calc.getRegHeightDp(13),
            },

            category_item_title_wrapper : {
                flex : 1,
                width : calc.getRegWidthDp(52),
                height : calc.getRegHeightDp(50),
                marginRight: calc.getRegWidthDp(33),

            },

            category_item_title: {
                fontSize: 14,
                fontWeight: "700",
                letterSpacing: 0.01,
                color: "#292929",
                position: 'absolute',
                bottom: 0,
            },

            category_item_number: {
                fontSize: 14,
                height: calc.getRegHeightDp(20),
                marginTop : calc.getRegHeightDp(31),
                letterSpacing: 0.01,
                color: "#292929"
            },

            category_item_arrow_button: {
                width: calc.getRegWidthDp(15),
                height: calc.getRegHeightDp(18),
                marginTop : calc.getRegHeightDp(31),
            }


        }
    )
        ;
}