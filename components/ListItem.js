import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {RatioCalculator} from "../util";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);


export class ListItem extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.list_item_wrapper}>
                <TouchableOpacity>
                <View style={styles.list_item}>
                    <View style={styles.list_item_left}>
                        <Text style={styles.item_tit}>{this.props.title}</Text>
                        <View style={styles.item_category_container}>
                            <Image style={styles.item_category_icon}/>
                            <Text style={styles.item_category_text}>{this.props.category}</Text>
                        </View>
                        <View style={styles.item_info_container}>
                            <Text style={styles.item_info_text}>{this.props.date}</Text>
                            <View style={styles.item_info_line}></View>
                            <Text style={styles.item_info_text}>{this.props.where}</Text>
                        </View>
                        <TouchableOpacity style={styles.item_more}>
                            <Text>· · ·</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.list_item_rip}>
                        <View style={styles.item_rip_top}></View>
                        <View style={styles.item_rip_line}></View>
                        <View style={styles.item_rip_bottom}></View>
                    </View>
                    <View style={styles.list_item_right}>
                        <View style={styles.item_thumb_container}>
                            <Image style={styles.item_thumb}/>
                        </View>
                        <TouchableOpacity style={styles.item_like}>
                            <Image style={styles.item_like_image}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.list_shadow}></View>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list_item_wrapper : {
        position: 'relative',
        paddingHorizontal: calc.getRegWidthDp(21),
        paddingBottom: calc.getRegHeightDp(12),
    },
    list_shadow : {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        right: 0,
        bottom: 0,
        elevation: 20,
        backgroundColor: 'transparent',
    },
    list_item : {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: calc.getRegWidthDp(90),
        backgroundColor: 'transparent',
        borderRadius: 6,
        overflow: 'hidden',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.32,
        // shadowRadius: 5.46,

        // elevation: 7,
    },
    list_item_left : {
        zIndex: 1,
        flex: 1,
        paddingHorizontal: calc.getRegWidthDp(12),
        paddingVertical: calc.getRegWidthDp(12),
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        backgroundColor: 'white',
    },
    item_tit : {
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: -0.25,
        color: "#464646"
    },
    item_category_container : {
        marginTop: calc.getRegHeightDp(20),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    item_category_icon : {
        width: calc.getRegWidthDp(13),
        height: calc.getRegWidthDp(15),
        backgroundColor: "#5e5e5e"
    },
    item_category_text : {
        marginLeft: calc.getRegWidthDp(3),
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.2,
        color: "#5e5e5e"
    },
    item_info_container : {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: calc.getRegHeightDp(3),
    },
    item_info_text : {
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.2,
        color: "#5e5e5e"
    },
    item_info_line : {
        width: calc.getRegWidthDp(1),
        height: calc.getRegHeightDp(9),
        marginHorizontal: calc.getRegWidthDp(5),
        borderStyle: "solid",
        borderLeftWidth: 1,
        borderColor: "#636363",
        overflow: 'hidden'
    },
    item_more : {
        position: 'absolute',
        top: 0,
        right: 0,
        width: calc.getRegWidthDp(24),
        height: calc.getRegWidthDp(24),
    },
    list_item_rip : {
        zIndex: 1,
        width: calc.getRegWidthDp(20),
        marginVertical: calc.getRegWidthDp(10),
        backgroundColor: 'white',
    },
    item_rip_line : {
        alignItems: 'stretch',
        width: calc.getRegWidthDp(1),
        height: '100%',
        marginLeft: '50%',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#e9e9e9',
        borderRadius: 1,
    },
    item_rip_top : {
        position: 'absolute',
        width: calc.getRegWidthDp(30),
        height: calc.getRegWidthDp(30),
        top: -calc.getRegHeightDp(30),
        right: -calc.getRegWidthDp(5),
        borderWidth: calc.getRegWidthDp(7),
        borderRadius: 100,
        borderColor: '#fff',
    },
    item_rip_bottom : {
        position: 'absolute',
        width: calc.getRegWidthDp(30),
        height: calc.getRegWidthDp(30),
        bottom: -calc.getRegHeightDp(30),
        right: -calc.getRegWidthDp(5),
        borderWidth: calc.getRegWidthDp(7),
        borderRadius: 100,
        borderColor: '#fff',
        // elevation: 10,
    },
    list_item_right : {
        zIndex: 1,
        width: calc.getRegWidthDp(90),
        height: '100%',
        padding: calc.getRegWidthDp(8),
        paddingLeft: calc.getRegWidthDp(5),
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: 'white',
    },
    item_thumb_container : {
        flex: 1,
        borderRadius: 6,
        backgroundColor: 'orange',
    },
    item_like : {
        position: 'absolute',
        right: calc.getRegWidthDp(15),
        bottom: calc.getRegHeightDp(15),
    },
    item_like_image : {
        width: calc.getRegWidthDp(14),
        height: calc.getRegHeightDp(14),
        backgroundColor: "#5e5e5e"
    }
})