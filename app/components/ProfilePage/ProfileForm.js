/**
 * Created by Murkrow on 6/1/2017.
 */

import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import NumberTextInput from "../Commons/UserInput/NumberTextInput";

export default class ProfileForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.datetimeContainer}>
                    <NumberTextInput placeholder="Ngày" label="Ngày"/>
                    <NumberTextInput placeholder="Tháng" label="Tháng"/>
                    <NumberTextInput placeholder="Năm" label="Năm"/>
                    <NumberTextInput placeholder="Giờ" label="Giờ"/>
                    <NumberTextInput placeholder="Phút" label="Phút"/>
                </View>
                <NumberTextInput
                    placeholder="Email"
                    label="Email"/>
                <NumberTextInput
                    placeholder="Số điện thoại"
                    label="Số điện thoại"/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        flexDirection: 'column',
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: 'grey',
    }, datetimeContainer: {
        flexDirection: 'row',
    }
});

