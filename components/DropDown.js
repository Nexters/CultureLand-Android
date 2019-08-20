import React, {Component} from 'react';
import {Dropdown} from 'react-native-material-dropdown';
import {Dimensions} from "react-native";
import {RatioCalculator} from "../util";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const calc = new RatioCalculator(screenWidth, screenHeight);
export default class DropDown extends Component {
    render() {
        let data = [{
            value: '최신순',
        }, {
            value: '인기순',
        },

        ];

        return (
            <Dropdown
                value={"최신순"}
                data={data}
                dropdownOffset={{top: 0, left: 0}}
                dropdownPosition={0}
                inputContainerStyle={{
                    borderBottomColor: 'transparent',

                }}
                containerStyle={{
                    width: calc.getRegWidthDp(65),
                    height: calc.getRegHeightDp(21),
                    marginLeft: 'auto',
                }}
                overlayStyle={{

                }}
                pickerStyle={{
                    marginTop : calc.getRegHeightDp(42),

                }}


                itemTextStyle={{

                }
                }

            />
        );
    }
}