/**
 * Created by murkrow on 6/13/17.
 */

import {Text, View, StyleSheet, Image} from "react-native";
import React, {Component, PropTypes} from "react";
import colors from "../../styles/colors";
import {APP_MARGIN} from "../../styles/dimens";
import IOButtonIcon from "../Commons/TopNavigationBar/IOButtonIcon";
import fonts from "./../../styles/fonts";
import LineDivider from "../Commons/LineDivider";
import Background from "../../styles/images/bg.jpg";

export default class NotificationItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        let topBorderColor = this.props.data.isFirst ? 'transparent' : colors.LIST_TOP_BORDER;
        return (
            <View style={styles.wrapper}>
                <LineDivider color={topBorderColor}/>
                <View style={styles.container}>
                    <Image source={Background} style={styles.icon}/>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{this.props.data.title }</Text>
                        <Text style={styles.content}>{this.props.data.content}</Text>
                    </View>
                    <IOButtonIcon
                        name="ios-arrow-forward-outline"
                        onPress={() => {
                        }}/>
                </View>
                <LineDivider color={colors.LIST_BOTTOM_BORDER}/>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        wrapper: {
            flexDirection: 'column'
        },
        container: {
            marginTop:5,
            marginBottom:5,
            alignItems: 'center',
            marginLeft: APP_MARGIN,
            flex: 1,
            flexDirection: 'row'

        },
        icon: {
            borderRadius:5,
            marginRight: 10,
            width: 40,
            height: 40
        },
        contentContainer: {
            marginLeft:5,
            flex: 1,
        },
        title: {
            fontFamily: fonts.OPEN_SAN,
            fontSize: 13,
            color: colors.BLACK
        },
        content: {
            fontFamily: fonts.OPEN_SAN,
            fontSize: 13,
            marginTop: 8,
            color: colors.LABEL
        }
    }
);