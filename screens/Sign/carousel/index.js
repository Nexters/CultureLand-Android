import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,

} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import First from '../asset/img1.svg';
import Second from '../asset/img2.svg';
import Third from '../asset/img3.svg';
import styleFn from "./styles";
import {RatioCalculator} from "../../../util";
import SearchBar from "../../../components/SearchBar";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const calc = new RatioCalculator(screenWidth, screenHeight);

const styles = styleFn(screenWidth, screenHeight, calc);

export class ImageCarousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeSlide : 0
        }
    }

    _renderItem({item, index}) {
        return (
            <View>{item.image()}</View>
        );
    }

    render() {
        return (
            <View>
                <Carousel
                    ref={(c) => {
                        this._carousel = c;
                    }}
                    data={[
                        {
                            image: function () {
                                return (
                                    <View style={styles.slide_wrapper}>
                                        <First style={styles.slide_image}>

                                        </First>

                                            <Text style={styles.slide_text}>문화생활{"\n"}
                                                검색하자{"\n"}
                                                컬러에서</Text>

                                    </View>

                                )
                            }
                        },
                        {

                            image: () => {
                                return (
                                    <View style={styles.slide_wrapper}>
                                        <Second style={styles.slide_image}>

                                        </Second>

                                        <Text style={styles.slide_text}>문화생활{"\n"}
                                            기록하자{"\n"}
                                            컬러에서</Text>

                                    </View>

                                )

                            }
                        },
                        {

                            image: () => {
                                return (
                                    <View style={styles.slide_wrapper}>
                                        <Third style={styles.slide_image}>

                                        </Third>

                                        <Text style={styles.slide_text}>
                                            문화생활{"\n"}
                                            즐겨보자{"\n"}
                                            직접가서</Text>

                                    </View>

                                )

                            }
                        },


                    ]}
                    renderItem={this._renderItem}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                    containerCustomStyle={styles.slide_container}
                    inactiveSlideScale={1}
                />
                <Pagination 
                    dotsLength={3} 
                    activeDotIndex={this.state.activeSlide}
                    carouselRef={this._carousel}
                    tappableDots={!!this._carousel}
                    inactiveDotScale={1}
                />
            </View>
        );
    }
}


