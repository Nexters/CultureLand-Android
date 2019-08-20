import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,

} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import First from '../asset/img1.svg';
import Second from '../asset/img2.svg';
import Third from '../asset/img3.svg';
import styleFn from "../styles";
import {RatioCalculator} from "../../../util";
import SearchBar from "../../../components/SearchBar";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const calc = new RatioCalculator(screenWidth, screenHeight);

const styles = styleFn(screenWidth, screenHeight, calc);

export class ImageCarousel extends Component {

    constructor(props) {
        super(props);
    }

    _renderItem({item, index}) {
        return (
            <View style={styles.image_wrapper}>
                <View style={styles.image_wrapper}>{item.image()}

                </View>
            </View>
        );
    }

    render() {
        return (
            <Carousel
                ref={(c) => {
                    this._carousel = c;
                }}
                data={[
                    {
                        image: function () {
                            return (
                                <View style={{
                                    paddingTop : calc.getRegHeightDp(130),
                                    paddingLeft : calc.getRegWidthDp(129)
                                }}>
                                    <First width={calc.getRegWidthDp(120)}
                                        height={calc.getRegHeightDp(120)}
                                    >

                                    </First>

                                        <Text style={ {
                                            width: calc.getRegWidthDp(73),
                                            height : calc.getRegHeightDp(83),
                                            marginLeft : calc.getRegWidthDp(20),
                                            fontSize : 20,
                                            lineHeight: 25,
                                        }}>문화생활{"\n"}
                                            검색하자{"\n"}
                                            컬러에서</Text>

                                </View>

                            )
                        }
                    },
                    {

                        image: () => {
                            return (
                                <View style={{
                                    paddingTop : calc.getRegHeightDp(130),
                                    paddingLeft : calc.getRegWidthDp(129)
                                }}>
                                    <Second width={calc.getRegWidthDp(120)}
                                           height={calc.getRegHeightDp(120)}
                                    >

                                    </Second>

                                    <Text style={ {
                                        width: calc.getRegWidthDp(73),
                                        height : calc.getRegHeightDp(83),
                                        marginLeft : calc.getRegWidthDp(20),
                                        fontSize : 20,
                                        lineHeight: 25,
                                    }}>문화생활{"\n"}
                                        기록하자{"\n"}
                                        컬러에서</Text>

                                </View>

                            )

                        }
                    },
                    {

                        image: () => {
                            return (
                                <View style={{
                                    paddingTop : calc.getRegHeightDp(130),
                                    paddingLeft : calc.getRegWidthDp(129)
                                }}>
                                    <Third width={calc.getRegWidthDp(120)}
                                           height={calc.getRegHeightDp(120)}
                                    >

                                    </Third>

                                    <Text style={ {
                                        width: calc.getRegWidthDp(73),
                                        height : calc.getRegHeightDp(83),
                                        marginLeft : calc.getRegWidthDp(20),
                                        fontSize : 20,
                                        lineHeight: 25,
                                    }}>문화생활{"\n"}
                                        즐겨보자{"\n"}
                                        직접가서</Text>

                                </View>

                            )

                        }
                    },


                ]}
                renderItem={this._renderItem}
                sliderWidth={calc.getRegHeightDp(400)}

                slideStyle={{
                    width: calc.getRegHeightDp(400),

                }}
                itemWidth={375}


            />
        );
    }
}


