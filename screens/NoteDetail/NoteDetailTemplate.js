import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Picker,
    Alert,

} from 'react-native';
import DatePicker from 'react-native-datepicker'
import {Dropdown} from 'react-native-material-dropdown';

import ThumbImage from "../../assets/images/icon/imageedit.svg"
import CalendarImage from "../../assets/images/icon/cal.svg"

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import {RatioCalculator} from "../../util";
import TabBarIcon from "../../components/TabBarIcon";
import PropTypes from 'prop-types';

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

export default class NoteDetailScreen extends Component {
    constructor(props){
        super(props)
    }

    _showWarningAlert = () => {
        Alert.alert(
            '이 화면을 벗어나면\n작성하던 내용이 사라집니다.',
            '계속하시겠습니까?',
            [
                {text: '취소', onPress: () => console.log('잘생각했어여'), style: 'cancel'},
                {text: '확인', onPress: () => console.log('왜죠..!!!')},
            ],
            { cancelable: true }
        )
    }
    
    _showConfirmAlert = () => {
        Alert.alert(
            '컬러가 저장되었습니다!','',
            [
                {text: '확인', onPress: () => console.log('성공')},
            ],
            { cancelable: false }
        )
    }

    render() {

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.header}>
                    <TouchableOpacity 
                        onPress={this._showWarningAlert}
                        activeOpacity={0.7} 
                        style={styles.header_left}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color="#292929" style={styles.header_button}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._showConfirmAlert}
                        activeOpacity={0.7} 
                        style={styles.header_right}
                    >
                        <Text style={styles.header_right_text}>확인</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.note_top_wrapper}>
                        <View style={styles.image_wrapper}>
                            <ThumbImage width={92} height={92} />
                            <Image style={styles.image}/>
                        </View>
                    </View>
                    <View style={styles.note_bottom_wrapper}>
                        <View style={styles.note_title}>
                            <Text style={styles.note_required_icon}>*</Text>
                            <Text style={styles.note_titleinput}>십센치 크리스마스 콘서트</Text>
                        </View>
                        <View style={styles.note_line}></View>
                        <Text style={styles.note_required}>*필수항목</Text>
                        <View style={styles.note_info_wrapper}>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>유형<Text style={styles.note_required_icon}>*</Text></Text>
                                <Text style={styles.note_sub_text}>뮤지컬</Text>
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>언제<Text style={styles.note_required_icon}>*</Text></Text>
                                <Text style={styles.note_sub_text}>2019.08.15</Text>
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>어디서<Text style={styles.note_required_icon}>*</Text></Text>
                                <Text style={styles.note_sub_text}>한강공원에서</Text>
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>누구와</Text>
                                <Text style={styles.note_sub_text}>혜데이랑</Text>
                            </View>
                        </View>
                        <View style={styles.note_textarea_wrapper}>
                            <Text style={styles.note_sub_title}>느낀것</Text>
                            <Text style={styles.note_textarea}>새로운 말을 한 번 적어보고 싶어서 멍때리면 한 번 적어보는 글… 날씨가 미쳤다 혼자 지읒리을 났다. 현재 상태는 어제 헬스에서 뒷판 근육 운동을 제대로 했음을 알 수 있는 상태이다. 
                                푸딩 맛있는데 하나가 최대치다. 더 이상 먹으면 느끼해서 푸딩을 싫어하게 될지도 모른다.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
};

NoteDetailScreen.navigationOptions = {
    header: null,
};

NoteDetailScreen.PropTypes ={
    title: PropTypes.string,
    category: PropTypes.string,
    sometime: PropTypes.string,
    place: PropTypes.string,
    withWho: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    isLiked: PropTypes.string,
};