/**
 * Created by murkrow on 6/14/17.
 */

import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";
import {APP_MARGIN} from "../../styles/dimens";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export default class DrawerTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>);
    };
}


const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column'
    },
    container: {
        backgroundColor:colors.LIST_TOP_BORDER,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',

    },
    title: {
        flex: 1,
        marginLeft: APP_MARGIN,
        fontFamily: fonts.OPEN_SAN,
        fontSize: 13,
        color: colors.LABEL
    }
});