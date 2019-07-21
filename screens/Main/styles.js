import {StyleSheet} from "react-native";

export default styles = function(screenWidth, screenHeight) {
    return StyleSheet.create({
        container: {
            width: "100%",
            height: "100%",
            paddingHorizontal: 40,
            backgroundColor: "#fff",
        },
        main_title: {
            textAlign: "left",
            fontSize: 24,
            fontWeight: "bold",
            color: "#4c4c4c"
        },
        main_thumb: {
            width: "100%",
            height: screenWidth*1.1
        },
        main_thumb_img: {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: 1,
            backgroundColor: "#ccc"
        }
    })
}