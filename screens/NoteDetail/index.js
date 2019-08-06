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
    KeyboardAvoidingView

} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import {RatioCalculator} from "../../util";
import TabBarIcon from "../../components/TabBarIcon";
import {Header} from "../../components/Header"

const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

function illustrateCarousel(number, title, type) {

}

export default class ItemDetailScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            text:"default"
        }
    }
    render() {

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            {/* <View style={styles.container}> */}
                <Header/>
                <ScrollView>
                    <View style={styles.note_top_wrapper}>
                        <View style={styles.image_wrapper}>
                            <Image style={styles.image}/>
                        </View>
                    </View>
                    <View style={styles.note_bottom_wrapper}>
                        <Text style={styles.note_title}>{'십센치 크리스마스 콘서트 \n 이게 두 줄이 되어도 잘 나오나'}</Text>
                        <View style={styles.note_line}></View>
                        <Text style={styles.note_required}>*필수항목</Text>
                        <View style={styles.note_info_wrapper}>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>유형<Text style={styles.note_required_icon}>*</Text></Text>
                                <TextInput value="19.12.25" style={styles.note_textinput}/>
                            </View>
                            <View style={styles.note_info_item}>
                                <Text style={styles.note_sub_title}>언제<Text style={styles.note_required_icon}>*</Text></Text>
                                <TextInput value="19.12.25" style={styles.note_textinput}/>
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
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                                // value="재미있었다 재미있었다 짱짱 재미있었다 재미있었다 짱짱 재미있었다 재미있었다 짱짱"
                                style={styles.note_textarea}
                            />
                        </View>
                    </View>
                </ScrollView>
            {/* </View> */}
            </KeyboardAvoidingView>
        )
    }
};


