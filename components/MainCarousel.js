import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import {RatioCalculator} from "../util";

import CardImageFirst from "../assets/images/illustration/Home_card01.svg";
import CardImageSecond from "../assets/images/illustration/Home_card02.svg";
import CardImageThird from "../assets/images/illustration/Home_card03.svg";
import TicketImage from "../assets/images/icon/ticket.svg";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);

export class MainCarousel extends Component {
    /**
     *
     *  처음 불러올 떄, 노트 리스트 데이터 없으면 초기 안내 스크린 출력
     *  
     */

    constructor (props) {
        super(props);

        this.state = {
            isNoteNull : true,
        }
    }

    _renderItem ({item, index}) {
        console.log(this.props.noteList)
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
                            <TicketImage style={styles.count_icon}/>
                            <Text style={styles.count}>{ item.count }</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    _renderItemNull ({item, index}) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slide_inner_container}
                onPress={()=> {alert(`You've clicked this!`)}}
            >
                <View style={styles.slide}>
                    <View style={styles.intro_container}>
                        {item.introImage}
                        <Text style={styles.intro_title}>{ item.introTitle }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    render () {
        return (
            <View>
                {this.state.isNoteNull ?
                    <Carousel   
                        ref={(c) => { this._carousel = c; }}
                        data={[
                            {
                                introTitle: '아직 기록이 없으시군요!\n최근 경험한 문화생활이 있나요?',
                                introImage: <CardImageFirst/>
                            },
                            {
                                introTitle: '무엇을 보고, 느꼈나요?\n소감을 자유롭게 적어보세요.',
                                introImage: <CardImageSecond/>
                            },
                            {
                                introTitle: '문화를 즐기는 컬쳐러버로서,\n당신의 발자취를 남겨보세요!',
                                introImage: <CardImageThird/>
                            },
                        ]}
                        renderItem={this._renderItemNull}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        firstItem={0}
                        containerCustomStyle={styles.slide_container}
                        contentContainerCustomStyle={styles.slider_content_container}
                        layout={'default'}
                        inactiveSlideOpacity={1}
                        inactiveSlideScale={1}
                    />
                :
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
                        firstItem={0}
                        containerCustomStyle={styles.slide_container}
                        contentContainerCustomStyle={styles.slider_content_container}
                        layout={'default'}
                        inactiveSlideOpacity={1}
                        inactiveSlideScale={1}
                    />
                }
            </View>
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
    slider_content_container : {
        marginLeft: - (sliderWidth / 2) + (slideWidth / 2) + calc.getRegWidthDp(29),
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
        padding: calc.getRegWidthDp(7),
        backgroundColor: 'white',
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
        elevation: 3,
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
        fontFamily: "noto-sans",
        fontSize: 22,
        // fontWeight: "300",
        fontStyle: "normal",
        letterSpacing: -0.45,
        color: "#464646",
    },
    count_container : {
        flexDirection: "row",
        alignItems: 'center',
    },
    count : {
        fontFamily: "noto-sans",
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
        // backgroundColor: "#ebebeb"
    },
    intro_container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    intro_title : {
        marginTop: calc.getRegWidthDp(30),
        fontFamily: "noto-sans",
        fontSize: 12,
        // fontWeight: "300",
        fontStyle: "normal",
        textAlign: "center",
        color: "#424242"
    }
})

MainCarousel.PropTypes ={
    noteList : PropTypes.string,
    wishList : PropTypes.string,
    getLoading : PropTypes.string,
    getError : PropTypes.string,
};