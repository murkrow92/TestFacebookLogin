/**
 * Created by murkrow on 6/13/17.
 */

import React, {Component} from "react";
import {Text, View, StyleSheet, TouchableHighlight} from "react-native";
import {APP_MARGIN} from "../../styles/dimens";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";
import LineDivider from "../Commons/LineDivider";
import IOButtonIcon from "../Commons/TopNavigationBar/IOButtonIcon";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";

export default class DrawerItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight
                underlayColor='transparent'
                onPress={this.props.onPress}>
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        {this.renderPrice(this.props.account)}
                        {this.renderButton(this.props.button, this.props.onPress)}
                    </View>
                    <LineDivider color={colors.LIST_BOTTOM_BORDER}/>
                </View>
            </TouchableHighlight>);
    };

    renderPrice(account) {
        if (account) {
            return (<Text style={styles.price}>{account}</Text>);
        }
    }

    renderButton(button, onPress) {
        if (button) {
            return <ButtonIcon
                color="#999999"
                icon={button}
                onPress={onPress}/>;

        } else {
            return <IOButtonIcon
                color="#999999"
                name="ios-arrow-forward-outline"
                onPress={() => {
                    this.props.navigate('Home');
                }}/>;
        }
    }
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
        flex: 1,
        marginLeft: APP_MARGIN,
        fontFamily: fonts.OPEN_SAN,
        fontSize: 13,
        color: colors.LABEL
    },
    price: {
        color: colors.RED,
        fontSize: 16,
        fontFamily: fonts.ARIAL
    }
});