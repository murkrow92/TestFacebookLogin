/**
 * Created by Murkrow on 6/4/2017.
 */
import React, {Component, PropTypes} from 'react';
import {Platform, Text, TextInput, View} from "react-native";
import colors from "../../../styles/colors";

export default class NumberTextInput extends Component {

    static propTypes = {
        placeholder: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        inline: PropTypes.bool.isRequired
    };

    render() {
        let containerStyle = {
            flex: this.props.inline ? 1 : 0,
            marginRight: this.props.inline ? 6 : 0
        };
        let labelStyle = {
            color: LABEL_COLOR,
            fontSize: FONT_SIZE,
            fontWeight: FONT_WEIGHT,
            marginBottom: 7
        };
        let textboxStyle = {
            backgroundColor: BORDER_COLOR,
            fontSize: FONT_SIZE,
            height: 36,
            paddingVertical: (Platform.OS === 'ios') ? 7 : 0,
            paddingHorizontal: 7,
            borderRadius: 4,
            borderColor: BORDER_COLOR,
            borderWidth: 1,
            marginBottom: 5
        };

        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>{this.props.label}</Text>
                <TextInput
                    onSubmitEditing={this.props.onSubmitEditing}
                    onChangeText={this.props.onChangeText}
                    keyboardType="numeric"
                    placeholder={this.props.placeholder}
                    underlineColorAndroid='transparent'
                    style={textboxStyle}/>
            </View>
        );
    }
}

const LABEL_COLOR = '#000000';
const INPUT_COLOR = '#000000';
const ERROR_COLOR = '#a94442';
const HELP_COLOR = '#999999';
const BORDER_COLOR = colors.TEXT_GREY;
const DISABLED_COLOR = '#777777';
const DISABLED_BACKGROUND_COLOR = '#eeeeee';
const FONT_SIZE = 14;
const FONT_WEIGHT = '100';