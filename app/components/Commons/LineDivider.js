/**
 * Created by Murkrow on 5/18/2017.
 */


import React, {Component} from "react";
import {View} from "react-native";
import colors from "../../styles/colors";

export default class LineDivider extends Component {
    render() {
        return (
            <View
                style={styles.divider}>
            </View>
        );
    }
}

const styles = {
    divider: {
        backgroundColor: colors.BORDER_GREY,
        height: 1,
        flexDirection: 'row'
    }
};