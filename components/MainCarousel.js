import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {RatioCalculator} from "../util";
import { Directions } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);

export class MainCarousel extends Component {

    constructor (props) {
        super(props);
    }

    _renderItem ({item, index}) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slide_inner_container}
                onPress={()=> {alert(`You've clicked this!`)}}
            >
                <View style={styles.slide}>
                    <View style={styles.image_container}>
                        <Image style={styles.image}/>
                    </View>
                    <View style={styles.text_container}>
                        <Text style={styles.title}>{ item.title }</Text>
                        <View style={styles.count_container}>
                            <Image style={styles.count_icon}/>
                            <Text style={styles.count}>{ item.count }</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.shadow}/>
            </TouchableOpacity>
        );
    }
    render () {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={[
                    {
                        title: 'JUNE',
                        count: 3,
                    },
                    {
                        title: 'JULY',
                        count: 4,
                    },
                    {
                        title: 'AUGUST',
                        count: 3,
                    },
                    {
                        title: 'SEPTEMBER',
                        count: 4,
                    },
                ]}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                firstItem={2}
                containerCustomStyle={styles.slide_container}
                // contentContainerCustomStyle={styles.slider_content_container}
                layout={'default'}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
            />
        );
    }
}

const horizontalMargin = calc.getRegWidthDp(9);
const verticalMargin = calc.getRegWidthDp(9);
const slideWidth = calc.getRegWidthDp(216);
const slideHeight = calc.getRegHeightDp(250);

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = slideHeight + verticalMargin;

const styles = StyleSheet.create({
    slide_container : {
        width: sliderWidth,
        marginTop: calc.getRegHeightDp(12),
    },
    slide_inner_container : {
        flex: 1,
        width: itemWidth,
        height: itemHeight,
        paddingHorizontal: horizontalMargin,
        paddingBottom: verticalMargin,
        paddingTop: 0,
    },  
    slide : {
        flex: 1,
        borderRadius: 7,
        padding: calc.getRegWidthDp(10),
        elevation: 3,
    },
    // shadow: {
    //     position: 'absolute',
    //     top: 0,
    //     left: horizontalMargin,
    //     right: horizontalMargin,
    //     bottom: verticalMargin,
    //     elevation: 6,
    //     // opacity: .5,
    //     shadowColor: '#787878',
    //     shadowOpacity: 0.25,
    //     shadowOffset: { width: 20, height: 20 },
    //     shadowRadius: 10,
    //     borderRadius: 8,
    // },
    image_container : {
        flex: 1,
        height: calc.getRegHeightDp(150),
        // padding: calc.getRegWidthDp(8),
        borderRadius: 7,
        elevation: 5,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        borderRadius: 7,
        backgroundColor: "#ebebeb"
    },
    text_container : {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: calc.getRegHeightDp(45),
        paddingHorizontal: calc.getRegWidthDp(6),
    },
    title : {
        fontSize: 22,
        fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: -0.45,
        color: "#464646",
    },
    count_container : {
        flexDirection: "row",
        alignItems: 'center',
    },
    count : {
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.29,
        color: "#464646",
    },
    count_icon : {
        width: calc.getRegWidthDp(22),
        height: calc.getRegWidthDp(22),
        marginRight: calc.getRegWidthDp(4),
        backgroundColor: "#ebebeb"
    }
})