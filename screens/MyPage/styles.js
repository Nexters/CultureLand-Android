import {StyleSheet} from "react-native";
import {ConvertZepSizeToRegularizedSize, RatioCalculator} from "../../util";
import {screenWidth, screenHeight} from "../../App";


export default styles = function (screenWidth, screenHeight, calc) {


    return StyleSheet.create({


            container: {
                width: '100%',
                height: '100%',
                flex: 1,
            },

            top_wrapper: {
                flexDirection: "column",
                width: "100%",
                paddingTop: 40,
                paddingHorizontal: 40,
                paddingBottom: 20,
                backgroundColor: "#fff",
                elevation: 3,
            },

            top_user_wrapper: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',

            },

            top_user_left: {
                flexDirection: 'row',
                flexWrap: 'wrap',
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
            },
            
            user_name_text: {
                width: "90%",
                fontFamily: "noto-sans-bold",
                width: "100%",
                fontSize: 24,
                fontWeight: "bold",
                fontStyle: "normal",
                letterSpacing: 0.01,
                color: "#4c4c4c",
                lineHeight: 28,
            },

            user_email: {
                fontFamily : 'noto-sans-thin',
                fontSize: 14,
                marginTop : 2,
                fontStyle: "normal",
                fontWeight: "100",
                lineHeight: 18,
                letterSpacing: -0.2,
                color: "#5e5e5e",
                opacity: 0.7,
            },
            top_total_wrapper: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 17,
            },
            top_user_right: {
            },
            user_logout: {
                fontFamily: 'noto-sans-bold',
                textAlign: 'right',
                fontSize: 12,
                opacity: 0.5,
                // fontWeight: "500",
                fontStyle: "normal",
                letterSpacing: -0.3,
                // textDecorationLine: 'underline',
                color: "#949494",
                lineHeight: 18,
                borderBottomWidth: 1,
                borderBottomColor: "#949494",
            },
            number_of_data_wrapper: {
                flex: 1,
                flexDirection: 'row',
                // width: "100%",
                // height: 28,
            },

            data_symbol: {
                width: 28,
                height: 28,
                marginRight: 2,
            },

            number_of_data_title: {
                fontFamily : 'noto-sans-light',
                height: calc.getRegHeightDp(20),
                marginTop: calc.getRegHeightDp(5),
                marginRight: 2,
                fontSize: 14,
                lineHeight: 16,
            },

            number_of_data_content: {
                fontFamily : 'noto-sans-mid',
                width: "100%",
                height: calc.getRegHeightDp(20),
                marginTop: calc.getRegHeightDp(3),
                fontSize: 15,
                fontWeight: "500",
                lineHeight: 18,
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
                elevation: 3,
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
                fontFamily: "noto-sans-bold",
                fontSize: 14,
                fontWeight: "700",
                letterSpacing: 0.01,
                color: "#292929",
                position: 'absolute',
                bottom: 0,
                lineHeight: 16,
            },

            category_item_number: {
                fontFamily: 'noto-sans-light',
                fontSize: 14,
                height: calc.getRegHeightDp(20),
                marginTop: calc.getRegHeightDp(31),
                letterSpacing: 0.01,
                color: "#292929",
                lineHeight: 16,
            },

            category_item_arrow_button: {
                width: calc.getRegWidthDp(15),
                height: calc.getRegHeightDp(18),
                marginTop: calc.getRegHeightDp(33),
                marginLeft: 5,
            }


        }
    )
        ;
}