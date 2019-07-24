import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export class MainCarousel extends Component {

    constructor (props) {
        super(props);
    }

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Image style={styles.image}/>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }
    render () {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={[
                    {
                        title: 'JUNE',
                    },
                    {
                        title: 'JULY',
                    },
                    {
                        title: 'AUGUST',
                    },
                    {
                        title: 'SEPTEMBER',
                    },
                ]}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                containerCustomStyle={this.props.style}
            />
        );
    }
}

const horizontalMargin = 14;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;

const styles = StyleSheet.create({
    slide: {
        width: itemWidth,
        height: 462,
        padding: horizontalMargin,
        borderRadius: 7,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#979797"
    },

    image: {
        resizeMode: "cover",
        flex: 1,
        height: 336,
        borderRadius: 7,
        backgroundColor: "#ebebeb"
    },

    title : {
        marginVertical: 22,
        fontSize: 40,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 1.3,
        color: "#292929"
    }
})