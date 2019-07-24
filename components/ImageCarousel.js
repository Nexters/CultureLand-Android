import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Carousel from 'react-native-snap-carousel';


export class ImageCarousel extends Component {

    constructor (props) {
        super(props);
    }

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
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
                        title: '임시 메세지',
                    },
                    {
                        title: '컬처랜드',
                    },
                    {
                        title: '가나다라마바사',
                    },
                    {
                        title: '아자차카타파하',
                    },
                    {
                        title: '자바스크립트',
                    },

                ]}
                renderItem={this._renderItem}
                sliderWidth={500}
                itemWidth={300}
            />
        );
    }
}

