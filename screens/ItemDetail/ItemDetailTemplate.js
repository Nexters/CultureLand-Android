import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    TouchableWithoutFeedback,
    Image,
    ImageBackground
} from 'react-native';
import {RatioCalculator} from "../../util";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import PropTypes from 'prop-types';
import Toast, {DURATION} from 'react-native-easy-toast';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

//TODO 글자수 넘어가면 복수라인처리

export default class ItemDetailScreen extends Component {

    /**
     *
     *  처음 불러올 떄, 위시리스트에 있으면 별 채워진 상태로 로딩!
     *  채워진 상태에서 별을 다시 누르면, 위시리스트에서 삭제 요청을 한다
     *  별 누르면 -> 서버에 위시리스트에 추가
     */
    /** TODO
     *  상품정보 불러오기
     *  위시리스트 등록함수(api)
     *  위시리스트 삭제함수(api)
     *  isWished 인지 확인함수(api)
     */



    constructor(props) {
        super(props);

        this.state = {
            isWished: false,
            error : this.props.error,
        };

        this.props.getItemInfo(1);
    }

    componentDidMount(){
    }

    wishButtonClickListener() {


        if (this.props.isWished) {
            console.log("Cancel wish triggered");
            return this.props.cancelWishedRequest(this.props.id);
        } else {
            console.log("set wish triggered");
            return this.props.setWishedRequest(this.props.id);
        }
    }

    renderWishedIcon() {


        let starColor = this.props.isWished ? "#FFCE0F" : "#c4c4c4";
        let iconType = this.props.isWished ? "ios-star" : "ios-star-outline";
        return (
            <TouchableWithoutFeedback
                onPress={this.wishButtonClickListener.bind(this)}
            >
                <Ionicons
                    name={iconType} size={30} color={starColor}
                />
            </TouchableWithoutFeedback>
        )
    }

    errorRenderer() {
        if(this.props.error){
            this.refs.toast.show(this.props.error, 1000, () => {
                // something you want to do at close
            });
        }
    }

    render() {

        return (

            <ImageBackground
                style={styles.container}
                source={{uri : this.props.imageUrl}}
                opacity={0.3}
                blurRadius={2}


            >
                <Toast ref="toast"/>
                {this.errorRenderer()}
                <View style={styles.back_button}>
                    <AntDesign
                        name="left" size={25} color="#f4f4f4"/>
                </View>
                <Image style={styles.center_image}
                    source={{uri : this.props.imageUrl}}
                >

                </Image>
                <View style={styles.bottom_info_wrapper}>

                    <View style={styles.title_row}>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <View style={styles.star_button}>
                            {this.renderWishedIcon()}
                        </View>
                    </View>
                    <View style={styles.info_row}>
                        <Text style={styles.row_title}>
                            유형
                        </Text>
                        <Text style={styles.row_content}>
                            {this.props.category}
                        </Text>
                    </View>
                    <View style={styles.info_row}>
                        <Text style={styles.row_title}>
                            기간
                        </Text>
                        <Text style={styles.row_content}>
                            {this.props.period}
                        </Text>
                    </View>
                    <View style={styles.info_row}>
                        <Text style={styles.row_title}>
                            장소
                        </Text>
                        <Text style={styles.row_content}>
                            {this.props.place}
                        </Text>
                    </View>
                </View>


            </ImageBackground>
        )
    }

};


ItemDetailScreen.PropTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    period: PropTypes.string,
    place: PropTypes.string,
    isWished: PropTypes.bool,

    getItemInfo: PropTypes.func,
    isWishedRequest: PropTypes.func,
    setWishedRequest: PropTypes.func,
    cancelWishedRequest: PropTypes.func,
};


ItemDetailScreen.navigationOptions = {
    header: null,
};