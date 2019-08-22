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
    Alert,

} from 'react-native';
import DatePicker from 'react-native-datepicker'
import {Dropdown} from 'react-native-material-dropdown';
import { ImagePicker, Permissions } from 'expo';
import moment from "moment";
import PropTypes from 'prop-types';

import AddPhotoImage from "../../assets/images/icon/addPhoto.svg"
import CalendarImage from "../../assets/images/icon/cal.svg"

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import {numberWithCommas, RatioCalculator, CATEGORY, CATEGORY_KOR, ISNULL} from "../../util";
import NavigatorService from "../../util/NavigatorService";

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

export default class NoteEditScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.note.title,
            category: this.props.note.category,
            sometime: this.props.note.sometime,
            place: this.props.note.place,
            withWho: this.props.note.withWho,
            content: this.props.note.content,
            image: this.props.note.image,
            isRequired: false,
        }
    }
    async componentDidMount(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }

    onSelectedChange(value, index){
        this.setState({category: value});
    }

    _showWarningAlert = () => {
        Alert.alert(
            '이 화면을 벗어나면\n작성하던 내용이 사라집니다.',
            '계속하시겠습니까?',
            [
                {text: '취소', style: 'cancel'},
                {text: '확인', onPress: () => NavigatorService.pop()},
            ],
            { cancelable: true }
        )
    }
    
    _showConfirmAlert = () => {
        Alert.alert(
            '컬러가 저장되었습니다!','',
            [
                {text: '확인', onPress: () => NavigatorService.pop()},
            ],
            { cancelable: false }
        )
    }

    render() {
        let { image } = this.state;
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
                        <Text style={styles.header_right_text}>저장</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.note_top_wrapper}>
                        <TouchableOpacity
                            onPress={this._pickImage}
                            activeOpacity={0.7}
                            style={styles.image_wrapper}
                        >
                            {
                                ISNULL(image)?
                                (<View style={styles.image_icon_wrapper}>
                                    <AddPhotoImage width={92} height={92} style={styles.image_icon}/>
                                </View>)
                                :
                                (<Image source={{ uri: image }} style={styles.image}/>)
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.note_bottom_wrapper}>
                        <View style={styles.note_title}>
                            <Text style={styles.note_required_icon}>*</Text>
                            <TextInput
                                style={styles.note_titleinput}
                                placeholderStyle={styles.note_titleinput_placeholder}
                                onChangeText={(title) => this.setState({title})}
                                value={this.state.title}
                                placeholder={"제목을 써주세요"}
                            />
                        </View>
                        <View style={styles.note_line}></View>
                        <Text style={styles.note_required}>*필수항목</Text>
                        <View style={styles.note_info_wrapper}>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>유형<Text style={styles.note_required_icon}>*</Text></Text>
                                <View style={styles.note_picker_wrapper}>
                                    <Dropdown
                                        value={CATEGORY_KOR(this.props.note.category)}
                                        data={[
                                            {
                                                value: "유형"
                                            },
                                            {
                                                value: "전시"
                                            },
                                            {
                                                value: "콘서트"
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
                                        dropdownOffset={{top: 13, left: 14}}
                                        dropdownPosition={0}
                                        inputContainerStyle={{
                                            borderBottomColor: 'transparent',
                                        }}
                                        containerStyle={{
                                            justifyContent: 'center',
                                            width: calc.getRegWidthDp(114),
                                            height: calc.getRegHeightDp(40),
                                            paddingHorizontal: calc.getRegWidthDp(9),
                                            // marginTop : -calc.getRegHeightDp(15),
                                        }}
                                        pickerStyle={{
                                            width: calc.getRegWidthDp(114),
                                            marginTop : calc.getRegHeightDp(50),
                                        }}
                                        itemTextStyle={{
                                            fontFamily: "noto-sans",
                                            fontSize: 16,
                                            lineHeight: 19,
                                        }}
                                        style={{
                                            fontFamily: "noto-sans",
                                            fontSize: 16,
                                            lineHeight: 19,
                                        }}
                                        onChangeText={(value, index) => this.onSelectedChange(value, index)}
                                    />
                                </View>
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>언제<Text style={styles.note_required_icon}>*</Text></Text>
                                <DatePicker
                                    style={styles.note_datepicker}
                                    date={this.state.sometime}
                                    mode="date"
                                    placeholder="0000-00-00"
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
                                            fontFamily: "noto-sans",
                                            fontSize: 16,
                                            position: 'absolute',
                                            left: 0,
                                            textAlign: 'left',
                                            borderColor: "transparent",
                                        },
                                        fontFamily: "noto-sans",
                                        fontSize: 16,
                                    }}
                                    onDateChange={(sometime) => {this.setState({sometime: sometime})}}
                                />
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>어디서<Text style={styles.note_required_icon}>*</Text></Text>
                                <TextInput 
                                    style={styles.note_textinput}
                                    onChangeText={(place) => this.setState({place})}
                                    value={this.state.place}
                                />
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>누구와</Text>
                                <TextInput 
                                    style={styles.note_textinput}
                                    onChangeText={(withWho) => this.setState({withWho})}
                                    value={this.state.withWho}
                                />
                            </View>
                        </View>
                        <View style={styles.note_textarea_wrapper}>
                            <Text style={styles.note_sub_title}>느낀것</Text>
                            <TextInput
                                multiline={true} 
                                onChangeText={(content) => this.setState({content})}
                                value={this.state.content}
                                // numberOfLines={11}
                                style={styles.note_textarea}
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        });

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
};

NoteEditScreen.navigationOptions = {
    header: null,
};

NoteEditScreen.PropTypes ={
    note: PropTypes.string,
};