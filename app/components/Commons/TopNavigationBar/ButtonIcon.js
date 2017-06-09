/**
 * Created by Murkrow on 6/9/2017.
 */

import React, {Component, PropTypes} from 'react';
import {TouchableHighlight, StyleSheet, View} from "react-native";
import colors from "../../../styles/colors";
import Icon from "../Icons/Icon";
import {APP_MARGIN, ICON_SIZE} from "../../../styles/dimens";

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
                <View style={styles.container}>
                    <Icon
                        name={this.props.icon}
                        size={ICON_SIZE}
                        color={colors.BLUE}/>
                </View>
            </TouchableHighlight>);
    }
}

const boxWidth = (ICON_SIZE * 0.5 + APP_MARGIN) * 2;

const styles = StyleSheet.create({
        button: {
            width: boxWidth,
            justifyContent: 'center',
        },
        container: {
            alignSelf: 'center'
        },
    }
);

