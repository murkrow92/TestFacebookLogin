/**
 * Created by Murkrow on 6/4/2017.
 */
import React, {Component, PropTypes} from 'react';
import {Platform, Text, TextInput, View} from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export default class NumberTextInput extends Component {

    static propTypes = {
        placeholder: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        inline: PropTypes.bool.isRequired,
        isLast:PropTypes.bool
    };

    render() {
        let containerStyle = {
            flex: this.props.inline ? 1 : 0,
            marginRight: !this.props.inline || this.props.isLast ? 0 : 10
        };
        let labelStyle = {
            color:colors.LABEL,
            fontSize: LABEL_FONT_SIZE,
            fontWeight: FONT_WEIGHT,
            marginBottom: 4
        };
        let textBoxStyle = {
            fontFamily:fonts.ARIAL,
            backgroundColor: BORDER_COLOR,
            fontSize: FONT_SIZE,
            height: 32,
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
                    style={textBoxStyle}/>
            </View>
        );
    }
}

const BORDER_COLOR = colors.TEXT_GREY;
const FONT_SIZE = 13;
const LABEL_FONT_SIZE = 11;
const FONT_WEIGHT = '100';