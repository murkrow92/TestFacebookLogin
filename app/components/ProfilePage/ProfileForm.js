/**
 * Created by Murkrow on 6/1/2017.
 */

import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import NumberTextInput from "../Commons/UserInput/NumberTextInput";
import Icon from "../Commons/Icons/Icon";

export default class ProfileForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.datetimeContainer}>
                    <NumberTextInput
                        onSubmitEditing={() => {
                            this.monthInput.textInput.focus()
                        }}
                        returnKeyType="next"
                        placeholder="Ngày"
                        label="Ngày"
                        style={styles.datetimeComponent}
                        inline={true}/>
                    <NumberTextInput
                        ref={input => {
                            this.monthInput = input
                        }}
                        onSubmitEditing={() => {
                            this.yearInput.textInput.focus()
                        }}
                        returnKeyType="next"
                        placeholder="Tháng"
                        label="Tháng"
                        style={styles.datetimeComponent}
                        inline={true}/>
                    <NumberTextInput
                        ref={input => {
                            this.yearInput = input
                        }}
                        onSubmitEditing={() => {
                            this.hourInput.textInput.focus()
                        }}
                        returnKeyType="next"
                        placeholder="Năm"
                        label="Năm"
                        style={styles.datetimeComponent}
                        inline={true}/>
                    <View style={styles.iconContainer}>
                        <Icon
                            style={styles.label}
                            size={20}
                            name="birthday"/>
                    </View>
                    <NumberTextInput
                        ref={input => {
                            this.hourInput = input
                        }}
                        onSubmitEditing={() => {
                            this.minuteInput.textInput.focus()
                        }}
                        returnKeyType="next"
                        placeholder="Giờ"
                        label="Giờ"
                        inline={true}/>
                    <NumberTextInput
                        ref={input => {
                            this.minuteInput = input
                        }}
                        onSubmitEditing={() => {
                            this.emailInput.textInput.focus()
                        }}
                        returnKeyType="next"
                        isLast={true}
                        placeholder="Phút"
                        label="Phút"
                        inline={true}/>
                </View>
                <View style={styles.space}/>
                <NumberTextInput
                    ref={input => {
                        this.emailInput = input
                    }}

                    onSubmitEditing={() => {
                        this.phoneInput.textInput.focus()
                    }}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder="Email"
                    label="Email"/>
                <View style={styles.space}/>
                <NumberTextInput
                    ref={input => {
                        this.phoneInput = input
                    }}
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
        paddingLeft: 15,
        paddingRight: 15
    },
    datetimeContainer: {
        flexDirection: 'row',
    },
    datetimeComponent: {
        flex: 1,
    },
    space: {
        height: 25
    },
    iconContainer: {
        paddingBottom: 8,
        alignItems: 'flex-end',
        marginRight: 10,
        flexDirection: 'row'
    },
    label: {}

});

