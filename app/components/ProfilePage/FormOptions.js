/**
 * Created by Murkrow on 6/2/2017.
 */

import formStyle from "./FormStyle";
import {TextInput, View, Text} from "react-native";
import React, {Component} from "react";
import colors from "../../styles/colors";
import {Platform} from "react-native";

export default options = {
    stylesheet: formStyle,
    auto: 'placeholders',
    fields: {
        email: {
            label: 'Email',
            error: 'Không đúng định dạng Email'
        },
        phone: {
            label: 'Điện thoại',
            placeholder: 'Số điện thoại',
            error: 'Không đúng định dạng Số điện thoại'
        },
        date: {
            label: 'Ngày',
            placeholder: 'Ngày',
            template: template
        },
        month: {
            label: 'Tháng',
            placeholder: 'Tháng',
            template: template
        },
        year: {
            label: 'Năm',
            placeholder: 'Năm',
            template: template
        },
        hour: {
            label: 'Giờ',
            placeholder: 'Giờ',
            template: template
        },
        minute: {
            label: 'Phút',
            placeholder: 'Phút',
            template: template
        }
    }
};

function template(locals) {

    let containerStyle = {
        width: 100
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
            <Text style={labelStyle}>{locals.label}</Text>
            <TextInput
                placeholder={locals.placeholder}
                underlineColorAndroid='transparent'
                style={textboxStyle}/>
        </View>
    );
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

