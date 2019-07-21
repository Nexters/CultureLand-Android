import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export class MainCarousel extends Component {

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
                sliderWidth={300}
                itemWidth={400}
                // containerCustomStyle={styles.slider}
                // contentContainerCustomStyle={styles.sliderContentContainer}
            />
        );
    }
}