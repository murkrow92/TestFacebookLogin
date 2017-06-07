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
                        onChangeText={(text) => this.setState({date: text})}
                        onSubmitEditing={() => this.monthInput.focus()}
                        style={styles.datetimeComponent}
                        inline={true}/>
                    <NumberTextInput
                        onSubmitEditing={() => this.yearInput.focus()}
                        onChangeText={(text) => this.setState({month: text})}
                        ref={(input) => this.monthInput = input}
                        placeholder="Tháng"
                        label="Tháng"
                        style={styles.datetimeComponent}
                        inline={true}/>
                    <NumberTextInput
                        onSubmitEditing={() => this.hourInput.focus()}
                        onChangeText={(text) => this.setState({year: text})}
                        ref={(input) => this.yearInput = input}
                        placeholder="Năm"
                        label="Năm"
                        style={styles.datetimeComponent}
                        inline={true}/>
                    <NumberTextInput
                        onSubmitEditing={() => this.minuteInput.focus()}
                        onChangeText={(text) => this.setState({hour: text})}
                        ref={(input) => this.hourInput = input}
                        placeholder="Giờ"
                        label="Giờ"
                        inline={true}/>
                    <NumberTextInput
                        returnKeyType="go"
                        onChangeText={(text) => this.setState({minute: text})}
                        ref={(input) => this.minuteInput = input}
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

