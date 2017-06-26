/**
 * Created by Murkrow on 6/1/2017.
 */

import React, {Component} from "react";
import {View, StyleSheet, ScrollView, Keyboard} from "react-native";
import NumberTextInput from "../Commons/UserInput/NumberTextInput";
import Icon from "../Commons/Icons/Icon";

export default class ProfileForm extends Component {

    render() {
        const {actions, profile} = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.datetimeContainer}>
                        <NumberTextInput
                            onSubmitEditing={() => {
                                this.monthInput.textInput.focus()
                            }}
                            value={profile.day}
                            onChangeText={(day) => { actions.onFormChange('day', day) }}
                            returnKeyType="next"
                            placeholder="Ngày"
                            label="Ngày"
                            style={styles.datetimeComponent}
                            inline={true}/>
                        <NumberTextInput
                            value={profile.month}
                            onChangeText={(month) => { actions.onFormChange('month', month) }}
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
                            onChangeText={(year) => { actions.onFormChange('year', year) }}
                            ref={input => {
                                this.yearInput = input
                            }}
                            onSubmitEditing={() => {
                                this.hourInput.textInput.focus()
                            }}
                            value={profile.year}
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
                            onChangeText={(hour) => { actions.onFormChange('hour', hour) }}
                            ref={input => {
                                this.hourInput = input
                            }}
                            value={profile.hour}
                            onSubmitEditing={() => {
                                this.minuteInput.textInput.focus()
                            }}
                            returnKeyType="next"
                            placeholder="Giờ"
                            label="Giờ"
                            inline={true}/>
                        <NumberTextInput
                            onChangeText={(minute) => { actions.onFormChange('minute', minute) }}
                            ref={input => {
                                this.minuteInput = input
                            }}
                            onSubmitEditing={() => {
                                this.emailInput.textInput.focus()
                            }}
                            value={profile.minute}
                            returnKeyType="next"
                            isLast={true}
                            placeholder="Phút"
                            label="Phút"
                            inline={true}/>
                    </View>
                    <View style={styles.space}/>
                    <NumberTextInput
                        onChangeText={(email) => { actions.onFormChange('email', email) }}
                        ref={input => {
                            this.emailInput = input
                        }}
                        value={profile.email}
                        onSubmitEditing={() => {
                            this.phoneInput.textInput.focus()
                        }}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder="Email"
                        label="Email"/>
                    <View style={styles.space}/>
                    <NumberTextInput
                        onChangeText={(phone) => { actions.onFormChange('phone', phone) }}
                        ref={input => {
                            this.phoneInput = input
                        }}
                        onSubmitEditing={() => {
                            Keyboard.dismiss();
                            actions.requestSave(profile);
                        }}
                        value={profile.phone}
                        placeholder="Số điện thoại"
                        label="Số điện thoại"/>

                </View>
            </ScrollView>
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

