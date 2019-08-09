import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default class CDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''

        };
    }

    render() {
        var data = [["C", "Java", "JavaScript", "PHP"]];
        return (
                <DropdownMenu
                    style={{

                        width : 50,
                        height : 30,
                        zIndex : 100,
                    }}
                    bgColor={'white'}
                    tintColor={'#666666'}
                    activityTintColor={'green'}
                    // arrowImg={}
                    // checkImage={}
                    // optionTextStyle={{color: '#333333'}}
                    // titleStyle={{color: '#333333'}}
                    // maxHeight={300}
                    handler={(selection, row) => this.setState({text: data[selection][row]})}
                    data={data}
                >


                </DropdownMenu>
        );
    }

}