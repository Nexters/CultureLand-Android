import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,

} from 'react-native';

import PropTypes from 'prop-types';
import {CATEGORY, RatioCalculator, ISNULL} from "../../util";
import NavigatorService from "../../util/NavigatorService";
import CategoryType from "../../domain/CategoryType";
import Entypo from '@expo/vector-icons/Entypo'
import ConcertImage from './asset/concert.svg';
import EtcImage from './asset/etc.svg';
import ExhibitionImage from './asset/exhibition.svg';
import LikeImage from './asset/like.svg';
import MusicalImage from './asset/musical.svg';
import PlayImage from './asset/play.svg';
import TicketImage from './asset/ticket.svg';
import {LIST_TYPE} from "../../util/index";


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);


export default class MyPageScreen extends Component {

    constructor(props) {
        super(props);




    }

    returnArrowButton(){
        return (
            <View style={styles.category_item_arrow_button}>
                <Entypo
                    name="chevron-thin-right" size={calc.getRegHeightDp(12)} color="#c4c4c4"/>
            </View>
        )
    }

    componentDidMount(){
        this.props.navigation.addListener("didFocus",()=>{
            this.props.getMyPageCount();
        });

    }

    navigateToCategoryList(category){
        this.props.getDiaryList(LIST_TYPE.FOR_CATEGORY,category);
        NavigatorService.navigate('DiaryList');
    }

    generateCategories() {
        let residueColumn = this.categories.length % 2;
        let numberOfRow = this.categories.length / 2;
        if (residueColumn) {
            numberOfRow++;
        }
        for (let i = 0; i < numberOfRow; i++) {
            this.contentJSX.push(
                <View style={styles.item_pair_wrapper}>
                    <View style={styles.category_left_wrapper}>
                        <View style={styles.category_item_wrapper}>
                            <TouchableOpacity onPress={() => this.navigateToCategoryList(this.categories[i*2].getCategory())}>
                                <View style={styles.category_item_icon}>
                                    {this.categories[i*2].getSVGImage()}
                                </View>
                                <View style={styles.category_item_content_wrapper}>
                                    <View style={styles.category_item_title_wrapper}>
                                        <Text style={{
                                            ...styles.category_item_title,
                                            color: this.categories[i * 2].getTextColor()
                                        }}>
                                            {this.categories[i * 2].getName()}
                                        </Text>
                                    </View>
                                    <Text style={styles.category_item_number}>
                                        {this.categories[i * 2].getNumberOfItem()}
                                    </Text>
                                    {this.returnArrowButton()}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {this.categories.length > (i * 2 + 1) ?
                        <View style={styles.category_right_wrapper}>
                            <View style={styles.category_item_wrapper}>
                                <TouchableOpacity onPress={() => this.navigateToCategoryList(this.categories[i*2+1].getCategory())}>
                                    <View style={styles.category_item_icon}>
                                        {this.categories[i*2+1].getSVGImage()}
                                    </View>
                                    <View style={styles.category_item_content_wrapper}>
                                        <View style={styles.category_item_title_wrapper}>
                                            <Text style={styles.category_item_title}>
                                                {this.categories[i * 2 + 1].getName()}
                                            </Text>
                                        </View>
                                        <Text style={styles.category_item_number}>
                                            {this.categories[i * 2 + 1].getNumberOfItem()}
                                        </Text>
                                        {this.returnArrowButton()}
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        : <View/>
                    }
                </View>);
        }
        return this.contentJSX;
    }

    render() {

        const {
            userId,
            userEmail ,
            totalCount  ,
            error ,
        } = this.props;
        console.log(ISNULL(userEmail));
        this.props.getMyPageAccount();

        this.categories = [
            new CategoryType("좋아하는\n기록", "liked",this.props.likedCount,"#e44343",<LikeImage width={38} height={38}/>),
            new CategoryType("전시", CATEGORY.EXHIBITION,this.props.exhibitionCount,"",<ExhibitionImage width={38} height={38}/>),
            new CategoryType("콘서트",CATEGORY.CONCERT, this.props.concertCount,"",<ConcertImage width={38} height={38}/>),
            new CategoryType("뮤지컬",CATEGORY.MUSICAL,this.props.musicalCount,"",<MusicalImage width={38} height={38}/>),
            new CategoryType("연극", CATEGORY.PLAY,this.props.playCount,"",<PlayImage width={38} height={38}/>),
            new CategoryType("기타",CATEGORY.ETC, this.props.etcCount,"",<EtcImage width={38} height={38}/>)
        ];
        this.contentJSX = new Array(6);

        if(this.props.loading) {
            return (<Text> 대충 로딩중 </Text>)
        }else
            {
                return (
                    <View>
                        <View style={styles.top_wrapper}>
                            <View style={styles.top_user_wrapper}>
                                <View style={styles.top_user_left}>
                                    <Text style={styles.user_name_text}>
                                        {userId}
                                    </Text>
                                    <Text style={styles.user_email}>
                                        {userEmail}
                                    </Text>
                                </View>
                                <View style={styles.top_user_right}>
                                    <Text style={styles.user_logout}>
                                        로그아웃
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.number_of_data_wrapper}>
                                <View style={styles.data_symbol}>
                                    <TicketImage width={28} height={25}/>
                                </View>
                                <Text style={styles.number_of_data_title}>
                                    총 기록 개수
                                </Text>
                                <Text style={styles.number_of_data_content}>
                                    {totalCount}
                                </Text>

                            </View>
                        </View>


                        <View style={styles.bottom_wrapper}>
                            {this.generateCategories()}
                        </View>
                    </View>)
            }

        }
}

MyPageScreen.propTypes = {
    error : PropTypes.string,
    userId: PropTypes.string,
    userEmail : PropTypes.string,
    totalCount : PropTypes.number,
    musicalCount : PropTypes.number,
    likedCount : PropTypes.number,
    exhibitionCount : PropTypes.number,
    concertCount : PropTypes.number,
    playCount : PropTypes.number,
    etcCount : PropTypes.number,
    getMyPageAccount : PropTypes.func,
    getMyPageCount : PropTypes.func,
};

MyPageScreen.navigationOptions = {
    header: null,
};