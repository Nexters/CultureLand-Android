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
import {RatioCalculator, MAIN_MONTH, ISNULL, LIST_TYPE} from "../../util";
import NavigatorService from "../../util/NavigatorService";

import CardImageFirst from "../../assets/images/illustration/Home_card01.svg";
import CardImageSecond from "../../assets/images/illustration/Home_card02.svg";
import CardImageThird from "../../assets/images/illustration/Home_card03.svg";
import TicketImage from "../../assets/images/icon/ticket.svg";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);

export default class MainCarousel extends Component {
    /**
     *
     *  처음 불러올 떄, 노트 리스트 데이터 없으면 초기 안내 스크린 출력
     *  
     */

    constructor (props) {
        super(props);
    }

    _monthListHandler(item){
        this.props.getDiaryList(LIST_TYPE.FOR_DATE,
            this.props.yearType.toString() +item.title
        );
        NavigatorService.push('DiaryList')
    }

    _renderNoteItem ({item, index}) {

        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.slide_inner_container}
                onPress={()=>this._monthListHandler(item)}
            >
                <View style={styles.slide}>
                    <View style={styles.image_container}>
                        <Image
                            source={{uri : item.imageUrl}} 
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.text_container}>
                        <Text style={styles.title}>{ MAIN_MONTH(item.title) }</Text>
                        <View style={styles.count_container}>
                            <TicketImage style={styles.count_icon}/>
                            <Text style={styles.count}>{ item.count }</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    _renderInfoItem ({item, index}) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slide_inner_container}
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
        const noteList = this.props.noteList;
        const notePropsArray = [];
        noteList.map((note, index) => {
            notePropsArray.push({
                monthType: note.monthType,
                title: note.monthTime,
                count: note.count,
                imageUrl: note.imageUrl,
            })
        });
        
        const noteData = notePropsArray;
        const infoData = [
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
        ]

        return (
            <View>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={ ISNULL(noteList) ? infoData : noteData}
                    renderItem={ ISNULL(noteList) ? this._renderInfoItem : this._renderNoteItem.bind(this)}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    firstItem={0}
                    containerCustomStyle={styles.slide_container}
                    contentContainerCustomStyle={styles.slider_content_container}
                    layout={'default'}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}

                />
            </View>
        );
    }
}

const horizontalMargin = 9;
const verticalMargin = 9;
const slideWidth = 216;
const slideHeight = 250;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = slideHeight + verticalMargin;

const styles = StyleSheet.create({
    slide_container : {
        width: sliderWidth,
        marginTop: 12,
    },
    slider_content_container : {
        marginLeft: - (sliderWidth / 2) + (slideWidth / 2) + 29,
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
        justifyContent: 'space-between',
        padding: calc.getRegWidthDp(7),
        borderRadius: 7,
        backgroundColor: 'white',
        shadowColor: "#4ca0a0a0",
        shadowOffset: {
                width: 0,
                height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 3,
    },
    image_container : {
        overflow: 'hidden',
        width: '100%',
        height: 150,
        borderRadius: 7,
        shadowColor: "#4ca0a0a0",
        shadowOffset: {
                width: 0,
                height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 3,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        backgroundColor: "#ebebeb"
    },
    text_container : {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: calc.getRegWidthDp(6),
    },
    title : {
        fontFamily: "Noto Sans KR",
        fontWeight: "300",
        fontSize: 22,
        lineHeight: 24,
        color: "#464646",
    },
    count_container : {
        flexDirection: "row",
        alignItems: 'flex-end',
    },
    count : {
        fontFamily: "Noto Sans KR",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.29,
        color: "#464646",
        lineHeight: 24,
    },
    count_icon : {
        width: 34,
        height: 34,
        marginRight: 4,
    },
    intro_container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    intro_title : {
        marginTop: calc.getRegWidthDp(30),
        fontFamily: "Noto Sans KR",
        fontSize: 12,
        fontStyle: "normal",
        textAlign: "center",
        color: "#424242",
        lineHeight: 16,
    }
})

MainCarousel.PropTypes ={
    noteList : PropTypes.string,
    getLoading : PropTypes.string,
    getError : PropTypes.string,
};
