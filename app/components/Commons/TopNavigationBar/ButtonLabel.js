/**
 * Created by murkrow on 6/9/17.
 */

import React, {Component, PropTypes} from 'react';
import {TouchableHighlight, StyleSheet, Text} from "react-native";
import colors from "../../../styles/colors";

export default class ButtonLabel extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired
    };

    render() {
        return (
            <TouchableHighlight
                onPress={() => this.props.onPress()}
                style={styles.button}
                underlayColor={colors.LIGHT_BLUE}>
                <Text style={styles.label}>{this.props.label}</Text>
            </TouchableHighlight>);
    }
}

const styles = StyleSheet.create({
        button: {
            marginRight:15,
            justifyContent: 'center',
        },
        label: {
            color:colors.BLUE,
            alignSelf: 'center'
        },
    }
);