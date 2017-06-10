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


export default class LogItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        let textChangeStyle = {
            fontFamily: fonts.OPEN_SAN,
            fontSize: 13,
            color: colors.GREEN
        };
        if (this.props.data.change < 0) {
            textChangeStyle.color = colors.RED;
        }
        let topBorderColor = this.props.data.isFirst ? 'transparent' : colors.LIST_TOP_BORDER;
        return (
            <View style={styles.wrapper}>
                <LineDivider color={topBorderColor}/>
                <View style={styles.container}>
                    <Icon size={30} name="mars"/>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{this.props.data.title }</Text>
                        <Text style={styles.content}>{this.props.data.content}</Text>
                    </View>
                    <View style={styles.textChangeContainer}>
                        <Text style={textChangeStyle}>{this.props.data.change}</Text>
                    </View>
                    <IOButtonIcon
                        name="ios-arrow-forward-outline"
                        onPress={() => {
                        }}/>
                </View>
                <LineDivider color={colors.LIST_BOTTOM_BORDER}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
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
        backgroundColor: 'lightblue',
        marginLeft: APP_MARGIN,
        flex: 1,
    },
    title: {
        fontFamily: fonts.HELVETICA,
        fontSize: 13,
        color: colors.BLACK
    },
    content: {
        fontFamily: fonts.OPEN_SAN,
        fontSize: 13,
        marginTop: 5,
        color: colors.LABEL
    },
    textChangeContainer: {
        width: 60,
        alignItems: 'flex-end'
    }
});

