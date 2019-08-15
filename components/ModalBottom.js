import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    // Modal,
    // TouchableHighlight,

} from 'react-native';
import {RatioCalculator} from "../util";
// import EditImage from "../../assets/images/icon/edit.svg";
// import DeleteImage from "../../assets/images/icon/delete.svg";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);

export class ModalBottom extends Component {
    constructor (props) {
        super(props);
    }
    
    state = {
        modalVisible: true,
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible})
    }

    render () {
        return (
            <View>
                {/* <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight> */}
                {/* <Modal
                    animationType="slide"
                    transparent={false}
                    visible={true}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View>
                        <TouchableHighlight 
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text></Text>
                            <EditImage width={27} height={27}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text></Text>
                            <DeleteImage width={27} height={27}/>
                        </TouchableHighlight>
                    </View>
                </Modal> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
})