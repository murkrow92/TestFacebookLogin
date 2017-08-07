/**
 * Created by murkrow on 6/10/17.
 */

import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import Currency from "../../lib/Currency";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { APP_MARGIN } from "../../styles/dimens";

const lodash = require('lodash');

export default class AccountBox extends Component {
    render() {
        const { bank } = this.props;
        let money = 0;
        if (!lodash.isEmpty(bank)) {
            money = bank.transaction.money;
        }

        return (
            <View style={styles.accountBox}>
                <Text style={styles.textAccount}>Số dư</Text>
                <View style={styles.content}>
                    <Text style={styles.textContent}>{Currency.convert(money)}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        onPress={() => {
                        }}
                        style={styles.button}
                        underlayColor='lightblue'>
                        <Text style={styles.label}>Nạp tiền</Text>
                    </TouchableHighlight>
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    accountBox: {
        backgroundColor: colors.LIST_TOP_BORDER,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'

    },
    textAccount: {
        marginLeft: APP_MARGIN,
        fontSize: 13,
        fontFamily: fonts.OPEN_SAN
    },
    buttonContainer: {
        backgroundColor: '#7373FA',
        marginRight: 15,
        borderRadius: 5,
        width: 94,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        marginLeft: 12,
        flex: 1
    },
    textContent: {
        color: colors.RED,
        fontSize: 18,
        fontFamily: fonts.OPEN_SAN,
    },
    label: {
        fontSize: 16,
        color: 'white'
    }
});