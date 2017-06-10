/**
 * Created by Murkrow on 5/18/2017.
 */


import React, {Component, PropTypes} from "react";
import {View} from "react-native";
import colors from "../../styles/colors";

export default class LineDivider extends Component {
    static propTypes = {
        color: PropTypes.string
    };

    render() {
        let bgColor = this.props.color ? this.props.color : colors.BORDER_GREY;
        return (
            <View
                style={{
                    backgroundColor: bgColor,
                    height: 1,
                    flexDirection: 'row'
                }}>
            </View>
        );
    }
}
