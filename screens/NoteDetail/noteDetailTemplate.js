import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,

} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import {RatioCalculator} from "../../util";
import NavigatorService from "../../util/NavigatorService";
import PropTypes from 'prop-types';

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

export default class NoteDetailScreen extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.header}>
                    <TouchableOpacity 
                        activeOpacity={0.7} 
                        style={styles.header_left}
                        onPress={() => NavigatorService.pop()}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color="#292929" style={styles.header_button}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7} 
                        style={styles.header_right}
                        onPress={() => NavigatorService.push('NoteEdit')}
                    >
                        <Text style={styles.header_right_text}>수정</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.note_top_wrapper}>
                        <View style={styles.image_wrapper}>
                            <Image style={styles.image} source={{uri: this.props.note.image}}/>
                        </View>
                    </View>
                    <View style={styles.note_bottom_wrapper}>
                        <View style={styles.note_title}>
                            <Text style={styles.note_required_icon}>*</Text>
                            <Text style={styles.note_titleinput}>{this.props.note.title}</Text>
                        </View>
                        <View style={styles.note_line}></View>
                        <Text style={styles.note_required}>*필수항목</Text>
                        <View style={styles.note_info_wrapper}>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>유형<Text style={styles.note_required_icon}>*</Text></Text>
                                <Text style={styles.note_sub_text}>{this.props.note.category}</Text>
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>언제<Text style={styles.note_required_icon}>*</Text></Text>
                                <Text style={styles.note_sub_text}>{this.props.note.sometime}</Text>
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>어디서<Text style={styles.note_required_icon}>*</Text></Text>
                                <Text style={styles.note_sub_text}>{this.props.note.place}</Text>
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>누구와</Text>
                                <Text style={styles.note_sub_text}>{this.props.note.withWho}</Text>
                            </View>
                        </View>
                        <View style={styles.note_textarea_wrapper}>
                            <Text style={styles.note_sub_title}>느낀것</Text>
                            <Text style={styles.note_textarea}>
                                {this.props.note.content}
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
    note: PropTypes.string,
};