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
                        returnKeyType="next"
                        placeholder="Ngày"
                        label="Ngày"
                        style={styles.datetimeComponent}
                        inline={true}/>
                    <NumberTextInput
                        returnKeyType="next"
                        placeholder="Tháng"
                        label="Tháng"
                        style={styles.datetimeComponent}
                        inline={true}/>
                    <NumberTextInput
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
                        returnKeyType="next"
                        placeholder="Giờ"
                        label="Giờ"
                        inline={true}/>
                    <NumberTextInput
                        returnKeyType="next"
                        isLast={true}
                        placeholder="Phút"
                        label="Phút"
                        inline={true}/>
                </View>
                <View style={styles.space}/>
                <NumberTextInput
                    returnKeyType="next"
                    placeholder="Email"
                    label="Email"
                    inline={false}/>
                <View style={styles.space}/>
                <NumberTextInput
                    inline={false}
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
        paddingBottom:8,
        alignItems:'flex-end',
        marginRight:10,
        flexDirection: 'row'
    },
    label: {

    }

});

