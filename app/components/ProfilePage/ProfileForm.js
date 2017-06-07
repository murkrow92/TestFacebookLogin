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
                    <NumberTextInput
                        placeholder="Ngày"
                        label="Ngày"
                        style={styles.datetimeComponent}
                        inline={true}/>
                    <NumberTextInput
                        placeholder="Tháng"
                        label="Tháng"
                        style={styles.datetimeComponent}
                        inline={true}/>
                    <NumberTextInput
                        placeholder="Năm"
                        label="Năm"
                        style={styles.datetimeComponent}
                        inline={true}/>
                    <NumberTextInput
                        placeholder="Giờ"
                        label="Giờ"
                        inline={true}/>
                    <NumberTextInput
                        placeholder="Phút"
                        label="Phút"
                        inline={true}/>
                </View>
                <NumberTextInput
                    placeholder="Email"
                    label="Email"
                    inline={false}/>
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
        paddingLeft: 12,
        paddingRight: 12
    },
    datetimeContainer: {
        flexDirection: 'row',
    },
    datetimeComponent: {
        flex: 1
    }

});

