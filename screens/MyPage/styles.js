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
                height: 167,
                paddingTop: calc.getRegHeightDp(55.4),
                paddingLeft: 40,
                paddingRight: calc.getRegWidthDp(28),
                backgroundColor: "#fff"

            },

            user_name_text: {
                fontFamily: 'noto-sans-bold',
                width: "100%",
                height: 33,
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
                fontFamily : 'noto-sans-thin',
                fontSize: 14,
                width: 215,
                height: 20,
                marginRight: 25 ,
                marginTop : 2,
                fontStyle: "normal",
                fontWeight: "100",
                lineHeight: 20,
                letterSpacing: -0.2,
                color: "#5e5e5e",
                opacity: 0.7,

            },

            user_logout: {
                fontFamily : 'noto-sans-mid',
                textAlign: 'right',
                width: 45,
                height: 18,
                fontSize: 12,
                opacity: 0.5,
                fontWeight: "500",
                fontStyle: "normal",
                letterSpacing: -0.3,
                textDecorationLine: 'underline',
                color: "#949494"
            },

            number_of_data_wrapper: {
                flexDirection: 'row',
                width: "100%",
                height: 28,
                marginTop: 16.3,
            },

            data_symbol: {
                width: 28,
                height: 28,
                marginRight: 2,
            },

            number_of_data_title: {
                fontFamily : 'noto-sans-light',
                width: calc.getRegWidthDp(70),
                height: calc.getRegHeightDp(20),
                marginTop: calc.getRegHeightDp(5),
                marginRight: 2,
                fontSize: 14,

            },

            number_of_data_content: {
                fontFamily : 'noto-sans-mid',
                width: "100%",
                height: calc.getRegHeightDp(20),
                marginTop: calc.getRegHeightDp(3),
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
                paddingTop: calc.getRegHeightDp(15),
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
                width: calc.getRegWidthDp(50),
                height: calc.getRegHeightDp(50),
                marginBottom: calc.getRegHeightDp(1),
            },


            category_item_content_wrapper: {
                flexDirection: 'row',
                width: '100%',
                height: calc.getRegHeightDp(33),
                paddingBottom: calc.getRegHeightDp(13),
            },

            category_item_title_wrapper: {
                flex: 1,
                width: calc.getRegWidthDp(52),
                height: calc.getRegHeightDp(50),
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
                marginTop: calc.getRegHeightDp(31),
                letterSpacing: 0.01,
                color: "#292929"
            },

            category_item_arrow_button: {
                width: calc.getRegWidthDp(15),
                height: calc.getRegHeightDp(18),
                marginTop: calc.getRegHeightDp(31),
            }


        }
    )
        ;
}