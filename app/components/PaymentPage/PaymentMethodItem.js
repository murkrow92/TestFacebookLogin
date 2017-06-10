/**
 * Created by murkrow on 6/10/17.
 */

import {Text, View, StyleSheet, Image} from "react-native";
import React, {Component, PropTypes} from "react";
import LineDivider from "../Commons/LineDivider";
import IOButtonIcon from "../Commons/TopNavigationBar/IOButtonIcon";
import colors from "../../styles/colors";
import {APP_MARGIN} from "../../styles/dimens";
import Icon from "../Commons/Icons/Icon";
import fonts from "../../styles/fonts";


export default class PaymentMethodItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <LineDivider color={colors.LIST_TOP_BORDER}/>
                <View style={styles.container}>
                    <Icon size={30} name={this.props.data.icon}/>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{this.props.data.methodName }</Text>
                    </View>
                    <IOButtonIcon
                        color="#999999"
                        name="ios-arrow-forward-outline"
                        onPress={() => {
                            this.props.data.onPress();
                        }}/>
                </View>
                <LineDivider color={colors.LIST_BOTTOM_BORDER}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height:64,
        flexDirection: 'column'
    },
    container: {
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        marginLeft: APP_MARGIN + 5,
        flex: 1,
        flexDirection: 'row'

    },
    contentContainer: {
        marginLeft: APP_MARGIN,
        flex: 1,
    },
    title: {
        fontFamily: fonts.HELVETICA,
        fontSize: 13,
        color: colors.BLACK
    },
    content: {
        fontFamily: fonts.REGULAR,
        fontSize: 11,
        marginTop: 5,
        color: colors.LABEL
    },
    textChangeContainer: {
        width: 60,
        alignItems: 'flex-end'
    }
});
