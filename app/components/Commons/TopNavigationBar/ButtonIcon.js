/**
 * Created by Murkrow on 6/9/2017.
 */

import React, {Component, PropTypes} from 'react';
import {TouchableHighlight, StyleSheet, View} from "react-native";
import colors from "../../../styles/colors";
import Icon from "../Icon";

export default class ButtonIcon extends Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired
    };

    render() {
        return (
            <TouchableHighlight
                onPress={() => this.props.onPress()}
                style={styles.button}
                underlayColor={colors.LIGHT_BLUE}>
                <View style={styles.icon}>
                    <Icon
                        name={this.props.icon}
                        size={20}
                        color={colors.BLUE}/>
                </View>
            </TouchableHighlight>);
    }
}

const styles = StyleSheet.create({
        button: {
            width: 50,
            justifyContent: 'center',
        },
        icon: {
            alignSelf: 'center'
        },
    }
);

