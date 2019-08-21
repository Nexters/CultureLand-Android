import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button,
} from 'react-native';
import {RatioCalculator} from "../util";
import NavigatorService from "../util/NavigatorService";

import MenuImage from "../assets/images/icon/menu.svg";
import LikeImage from "../assets/images/icon/like.svg";
import LikeChkImage from "../assets/images/icon/like_checked.svg";
import ExhibitionImage from "../assets/images/icon/type/exhibition.svg";
import MusicalImage from "../assets/images/icon/type/musical.svg";
import PlayImage from "../assets/images/icon/type/play.svg";
import EtcImage from "../assets/images/icon/type/etc.svg";
import ConcertImage from "../assets/images/icon/type/concert.svg";
import Dashline from "../assets/images/icon/dashline.svg";
import EditImage from "../assets/images/icon/edit.svg";
import DeleteImage from "../assets/images/icon/delete.svg";

import RBSheet from "react-native-raw-bottom-sheet";
import CategoryType from '../domain/CategoryType';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const calc = new RatioCalculator(screenWidth, screenHeight);


export default class ListItem extends Component {
    /**
     *
     *  처음 불러올 떄, 좋아요리스트에 있으면 하트 채워진 상태로 로딩!
     *  채워진 상태에서 하트을 다시 누르면, 좋아요리스트에서 삭제 요청을 한다
     *  하트 누르면 -> 서버에 좋아요리스트에 추가
     */

    constructor(props){
        super(props);
        // this.categories = [
        //     new CategoryType("전시")
        // ]

        this.state = {
            isLiked : true,
        }
    }

    render() {
        return (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => NavigatorService.push('NoteDetail')}
                    style={styles.list_item_wrapper}
                >
                {/* <View style={styles.list_shadow}></View> */}

                    <View style={styles.list_item}>
                        <View style={styles.list_item_left}>
                            <Text style={styles.item_tit}>{this.props.title}</Text>
                            <View style={styles.item_category_container}>
                                <ExhibitionImage  width={13} height={13} style={styles.item_category_icon}/>
                                <Text style={styles.item_category_text}>{this.props.category}</Text>
                            </View>
                            <View style={styles.item_info_container}>
                                <Text style={styles.item_info_text}>{this.props.date}</Text>
                                <View style={styles.item_info_line}></View>
                                <Text style={styles.item_info_text}>{this.props.where}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.item_more}
                                activeOpacity={0.7}
                                onPress={() => {
                                    this.RBSheet.open();
                                }}
                            >
                                <MenuImage width={32} height={32} style={styles.item_more_icon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.list_item_rip}>
                            <View style={styles.item_rip_top}></View>
                            <Dashline width={1} height={75} style={styles.item_rip_line}/>
                            <View style={styles.item_rip_bottom}></View>
                        </View>
                        <View style={styles.list_item_right}>
                            <View style={styles.item_thumb_container}>
                                <TouchableOpacity style={styles.item_like}>
                                    {this.state.isLiked ?
                                        // 좋아요 리스트에 있으면 채워진 상태로 로딩
                                        <LikeChkImage  width={27} height={27} style={styles.item_like_image}/>
                                        :
                                        <LikeImage  width={27} height={27} style={styles.item_like_image}/>
                                    }
                                </TouchableOpacity>
                                <Image style={styles.item_thumb}/>
                            </View>
                        </View>
                    </View>
                    <RBSheet

                            ref={ref => {
                                this.RBSheet = ref;
                            }}
                            height={calc.getRegWidthDp(152)}
                            duration={250}
                            customStyles={{
                                container: {
                                    justifyContent: "flex-start",
                                    alignItems: "stretch",
                                    paddingHorizontal: calc.getRegWidthDp(26),
                                    paddingTop: calc.getRegHeightDp(18),
                                    borderTopRightRadius: 12,
                                    borderTopLeftRadius: 12,
                                }
                            }}
                        >
                            
                        <TouchableOpacity
                            style={styles.actionSheet_item}
                            onPress={() => {
                                NavigatorService.push('NoteEdit')
                                this.RBSheet.close();
                            }}
                        >
                            <EditImage width={34} height={34}/>
                            <Text style={styles.actionSheet_text}>수정하기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.actionSheet_item}
                            onPress={() => {
                                this.RBSheet.close();
                            }}
                        >
                            <DeleteImage width={34} height={34}/>
                            <Text style={styles.actionSheet_text}>삭제하기</Text>
                        </TouchableOpacity>
                    </RBSheet>
                </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    list_item_wrapper : {
        position: 'relative',
        width: '100%',
        height: calc.getRegWidthDp(102),
        // paddingHorizontal: calc.getRegWidthDp(21),
        paddingBottom: calc.getRegHeightDp(12),
    },
    list_shadow : {
        position: 'absolute',
        zIndex: 1,
        top: calc.getRegWidthDp(10),
        left: '2%',
        width: '96%',
        height: calc.getRegWidthDp(70),
        padding: 10,
        right: 0,
        bottom: 0,
        elevation: 5,
        backgroundColor: '#fff',
    },
    list_item : {
        position: 'absolute',
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: calc.getRegWidthDp(90),
        backgroundColor: 'transparent',
        borderRadius: 6,
        overflow: 'hidden',
        // elevation: 5,
    },
    list_item_left : {
        justifyContent: 'space-between',
        zIndex: 1,
        flex: 1,
        paddingHorizontal: calc.getRegWidthDp(12),
        paddingVertical: calc.getRegWidthDp(6),
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        backgroundColor: 'white',
    },
    item_tit : {
        flex: 1,
        fontFamily: "noto-sans-bold",
        fontSize: 12,
        // fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: -0.25,
        color: "#464646"
    },
    item_category_container : {
        // marginTop: calc.getRegHeightDp(20),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    item_category_icon : {
        width: calc.getRegWidthDp(13),
        height: calc.getRegWidthDp(15),
    },
    item_category_text : {
        marginLeft: calc.getRegWidthDp(3),
        fontFamily: "noto-sans",
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.2,
        color: "#5e5e5e"
    },
    item_info_container : {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginTop: calc.getRegHeightDp(3),
    },
    item_info_text : {
        fontFamily: "noto-sans",
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.2,
        color: "#5e5e5e"
    },
    item_info_line : {
        width: calc.getRegWidthDp(1),
        height: calc.getRegHeightDp(9),
        marginHorizontal: calc.getRegWidthDp(5),
        borderStyle: "solid",
        borderLeftWidth: 1,
        borderColor: "#636363",
        overflow: 'hidden'
    },
    item_more : {
        zIndex: 1,
        position: 'absolute',
        top: calc.getRegHeightDp(5),
        right: -calc.getRegWidthDp(10),
        width: calc.getRegWidthDp(32),
        height: calc.getRegWidthDp(32),
    },
    item_more_icon : {
        width: calc.getRegWidthDp(32),
        height: calc.getRegWidthDp(32),
    },
    list_item_rip : {
        justifyContent: 'center',
        zIndex: 1,
        width: calc.getRegWidthDp(20),
        marginVertical: calc.getRegWidthDp(10),
        backgroundColor: 'white',
    },
    item_rip_line : {
        alignSelf: 'center',
        height: '100%',
        opacity: 0.7,
    },
    item_rip_top : {
        position: 'absolute',
        width: calc.getRegWidthDp(30),
        height: calc.getRegWidthDp(30),
        top: -calc.getRegHeightDp(30),
        right: -calc.getRegWidthDp(5),
        borderWidth: calc.getRegWidthDp(7),
        borderRadius: 100,
        borderColor: '#fff',
    },
    item_rip_bottom : {
        position: 'absolute',
        width: calc.getRegWidthDp(30),
        height: calc.getRegWidthDp(30),
        bottom: -calc.getRegHeightDp(30),
        right: -calc.getRegWidthDp(5),
        borderWidth: calc.getRegWidthDp(7),
        borderRadius: 100,
        borderColor: '#fff',
        // elevation: 10,
    },
    list_item_right : {
        zIndex: 1,
        width: calc.getRegWidthDp(90),
        height: '100%',
        padding: calc.getRegWidthDp(8),
        paddingLeft: calc.getRegWidthDp(5),
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: 'white',
    },
    item_thumb_container : {
        flex: 1,
        borderRadius: 6,
        backgroundColor: 'orange',
        elevation: 5,
    },
    item_like : {
        position: 'absolute',
        zIndex: 100,
        right: calc.getRegWidthDp(0),
        bottom: calc.getRegHeightDp(0),
        width: calc.getRegWidthDp(27),
        height: calc.getRegHeightDp(27),
    },
    item_like_image : {
        width: calc.getRegWidthDp(27),
        height: calc.getRegHeightDp(27),
    },
    actionSheet_item : {
        width: '100%',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: calc.getRegHeightDp(57),
        
    },
    actionSheet_text : {
        marginLeft: calc.getRegWidthDp(8),
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: "#424242"
    },
})