/**
 * Created by murkrow on 6/13/17.
 */

import React, {Component} from 'react';
import {DrawerItems} from 'react-navigation';
import {Text, View, StyleSheet, Image} from "react-native";
import colors from "../../styles/colors";
import IOButtonIcon from "../Commons/TopNavigationBar/IOButtonIcon";
import {APP_MARGIN} from "../../styles/dimens";
import fonts from "../../styles/fonts";
import Background from "../../styles/images/bg.jpg";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Đoàn Phúc Bảo',
            role: 'Học viên'
        }
    }

    render() {
        let content = this.props.content;
        return ( <View style={styles.container}>
            <View style={styles.accountBox}>
                <Image source={Background} style={styles.icon}/>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{this.state.name}</Text>
                    <Text style={styles.content}>{this.state.role}</Text>
                </View>
                <IOButtonIcon
                    name="ios-arrow-forward-outline"
                    onPress={() => {
                    }}/>
            </View>
            <DrawerItems {...content}/>
        </View> );


    }
}

const styles = StyleSheet.create({
    container: {},
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
