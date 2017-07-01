/**
 * Created by murkrow on 6/13/17.
 */

import {Image, Text, View, StyleSheet} from "react-native";
import React, {Component} from "react";
import {APP_MARGIN} from "../../styles/dimens";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export default class AccountBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 'Học viên'
        }
    }

    render() {
        return (
            <View style={styles.accountBox}>
                <Image source={this.props.picture} style={styles.icon}/>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{this.props.name}</Text>
                    <Text style={styles.content}>{this.state.role}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    accountBox: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        backgroundColor: colors.LIST_TOP_BORDER
    },
    icon: {
        marginLeft:APP_MARGIN,
        borderRadius: 3,
        marginRight: 10,
        width: 40,
        height: 40
    },
    contentContainer: {
        flex: 1
    },
    title: {
        fontWeight:'bold',
        fontFamily: fonts.ARIAL,
        fontSize: 13,
        color: colors.BLACK
    },
    content: {
        fontFamily: fonts.OPEN_SAN,
        fontSize: 13,
        color: colors.LABEL
    }

});