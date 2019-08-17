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
    Button

} from 'react-native';
import DatePicker from 'react-native-datepicker'
import {Dropdown} from 'react-native-material-dropdown';
import { ImagePicker, Permissions } from 'expo';

import AddPhotoImage from "../../assets/images/icon/addPhoto.svg"
import CalendarImage from "../../assets/images/icon/cal.svg"

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import {RatioCalculator} from "../../util";
import TabBarIcon from "../../components/TabBarIcon";

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);



export default class NoteEditScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: "2019-08-12",
        }
    }
    state = {
        image: null,
    };
    async componentDidMount(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }

    render() {
        let { image } = this.state;
        
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.header}>
                    <TouchableOpacity 
                        onPress={() => alert(props.centerText)}
                        activeOpacity={0.7} 
                        style={styles.header_left}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color="#292929" style={styles.header_button}/>
                    </TouchableOpacity>
                    <Text style={styles.header_right}>저장</Text>
                </View>
                <ScrollView>
                    <View style={styles.note_top_wrapper}>
                        <TouchableOpacity 
                            onPress={this._pickImage}
                            activeOpacity={0.7} 
                            style={styles.image_wrapper}
                        >
                            {image &&
                                <Image source={{ uri: image }} style={styles.image} 
                            />}
                            <View style={styles.image_icon_wrapper}>
                                <AddPhotoImage width={92} height={92} style={styles.image_icon}/>
                            </View>
                            {/* <Image style={styles.image}/> */}
                        </TouchableOpacity>
                        {/* <View style={styles.image_wrapper}>
                        </View> */}
                    </View>
                    <View style={styles.note_bottom_wrapper}>
                        <View style={styles.note_title}>
                            <Text style={styles.note_required_icon}>*</Text>
                            <TextInput value="십센치 크리스마스 콘서트" style={styles.note_titleinput}/>
                        </View>
                        <View style={styles.note_line}></View>
                        <Text style={styles.note_required}>*필수항목</Text>
                        <View style={styles.note_info_wrapper}>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>유형<Text style={styles.note_required_icon}>*</Text></Text>
                                <View style={styles.note_picker_wrapper}>
                                    <Dropdown
                                        value={"유형"}
                                        data={[
                                            {
                                                value: "유형"
                                            },
                                            {
                                                value: "뮤지컬"
                                            },
                                            {
                                                value: "연극"
                                            },
                                            {
                                                value: "기타"
                                            },
                                        ]}
                                        dropdownOffset={{top: 7}}
                                        dropdownPosition={0}
                                        inputContainerStyle={{
                                            borderBottomColor: 'transparent',
                                            // borderRadius: 2,
                                            // borderStyle: "solid",
                                            // borderWidth: 1,
                                            // borderColor: "red",
                                        }}
                                        containerStyle={{
                                            width: calc.getRegWidthDp(114),
                                            height: calc.getRegHeightDp(40),
                                            paddingHorizontal: calc.getRegWidthDp(9),
                                            // borderRadius: 2,
                                            // borderStyle: "solid",
                                            // borderWidth: 1,
                                            // borderColor: "#e9e9e9",
                                            marginLeft: 'auto',
                                        }}
                                        pickerStyle={{
                                            marginTop : calc.getRegHeightDp(42),

                                        }}
                                    />
                                </View>
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>언제<Text style={styles.note_required_icon}>*</Text></Text>
                                <DatePicker
                                    style={styles.note_datepicker}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    // minDate="2016-05-01"
                                    // maxDate="2020-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    iconComponent={
                                        <CalendarImage width={30} height={30} style={styles.note_datepicker_icon}/>
                                    }
                                    customStyles={{
                                        dateInput: {
                                            position: 'absolute',
                                            left: 0,
                                            textAlign: 'left',
                                            borderColor: "transparent",
                                        }
                                    }}
                                    onDateChange={(date) => {this.setState({date: date})}}
                                />
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>어디서<Text style={styles.note_required_icon}>*</Text></Text>
                                <TextInput value="한강공원에서" style={styles.note_textinput}/>
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>누구와</Text>
                                <TextInput value="혜데이랑" style={styles.note_textinput}/>
                            </View>
                        </View>
                        <View style={styles.note_textarea_wrapper}>
                            <Text style={styles.note_sub_title}>느낀것</Text>
                            <TextInput
                                multiline={true} 
                                // numberOfLines={11}
                                value="새로운 말을 한 번 적어보고 싶어서 멍때리면 한 번 적어보는 글… 날씨가 미쳤다 혼자 지읒리을 났다. 현재 상태는 어제 헬스에서 뒷판 근육 운동을 제대로 했음을 알 수 있는 상태이다. 
                                푸딩 맛있는데 하나가 최대치다. 더 이상 먹으면 느끼해서 푸딩을 싫어하게 될지도 모른다. 난 지금 물 속에서 숨을 쉬고 있는  것인가 뇌가 정지해서 지금 무슨 말을 더 쓸까 1도 생각 안 나지만, 노래 가사나 쓸까 아 노래방가고 싶은데 그 다음날이 두렵다 친구들이랑 피씨방도 가고 싶다. 우리집 선풍기 열일한다 화이팅 맥북도 열일한다 화이팅..! 아직 사놓고 못 맞춘 퍼즐이 다섯개..벌써 8월이라니 아마 9월에도 벌써 9월이라니 그러고 있겠지 하핫 끝"
                                style={styles.note_textarea}
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
        this.setState({ image: result.uri });
        }
    };
};

NoteEditScreen.navigationOptions = {
    header: null,
};
