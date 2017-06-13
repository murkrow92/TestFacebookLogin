/**
 * Created by murkrow on 6/13/17.
 */

import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";
import {APP_MARGIN} from "../../styles/dimens";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";
import LineDivider from "../Commons/LineDivider";

export default class DrawerItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <LineDivider color={colors.LIST_TOP_BORDER}/>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <LineDivider color={colors.LIST_BOTTOM_BORDER}/>
            </View>);
    };
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column'
    },
    container: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',

    },
    title: {
        marginLeft: APP_MARGIN,
        fontFamily: fonts.OPEN_SAN,
        fontSize: 13,
        color: colors.LABEL
    }
});