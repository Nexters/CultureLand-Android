import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import styleFn from "./styles"
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    StatusBar,

} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Ionicons} from '@expo/vector-icons'
import {CATEGORY_KOR, KOR_CATEGORY_TO_ENG, RatioCalculator} from "../../util";
import {FloatingButton} from "../../components/FloatingButton"
import ListComponent from "../../components/ListComponent";
import PropTypes from 'prop-types';
import {LIST_TYPE} from "../../util";
import NavigatorService from "../../util/NavigatorService";


const calc = new RatioCalculator(screenWidth, screenHeight);
const styles = styleFn(screenWidth, screenHeight, calc);

export default class DiaryListScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {

            title: '',
        }
    }

    componentDidMount() {
        this.props.navigation.addListener("didBlur", () => {
            this.props.getDiaryList(this.props.listType, this.props.listTitle);

            if (this.props.listType === LIST_TYPE.FOR_CATEGORY) {
                this.setState({title: CATEGORY_KOR(this.props.listTitle)})
            } else {
                let yearPart = this.props.listTitle.slice(0, 4);
                let monthPart = this.props.listTitle.slice(4, 6);
                this.setState({title: `${yearPart}.${parseInt(monthPart)}`})
            }
        });

        this.props.navigation.addListener("willFocus", () => {
            this.props.getDiaryList(this.props.listType, this.props.listTitle);

            if (this.props.listType === LIST_TYPE.FOR_CATEGORY) {
                this.setState({title: CATEGORY_KOR(this.props.listTitle)})
            } else {

                let yearPart = this.props.listTitle.slice(0, 4);
                let monthPart = this.props.listTitle.slice(4, 6);
                this.setState({title: `${yearPart}.${parseInt(monthPart)}`})
            }
        });
    }

    render() {

        const {} = this.props;


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => NavigatorService.pop()}
                        activeOpacity={0.7}
                        style={styles.header_left}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color="#292929" style={styles.header_button}/>
                    </TouchableOpacity>
                    <Text style={styles.header_center}>{
                        this.state.title
                    }</Text>
                    <Text style={styles.header_right}></Text>
                </View>
                <ListComponent
                    cultureList={this.props.cultureList}
                    getNoteItem={this.props.getNoteItem}
                    setLiked={this.props.setLiked}
                    cancelLiked={this.props.cancelLiked}
                />

                <FloatingButton/>
            </View>
        )
    }
};

DiaryListScreen.navigationOptions = {
    header: null,
};

DiaryListScreen.PropTypes = {
    listType: PropTypes.string,
};