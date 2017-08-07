/**
 * Created by murkrow on 6/10/17.
 */

import { Text, View, StyleSheet } from "react-native";
import React, { Component, PropTypes } from "react";
import LineDivider from "../Commons/LineDivider";
import IOButtonIcon from "../Commons/TopNavigationBar/IOButtonIcon";
import colors from "../../styles/colors";
import { APP_MARGIN } from "../../styles/dimens";
import fonts from "../../styles/fonts";
import IOIcon from "../Commons/Icons/IOIcon";
import Currency from "../../lib/Currency";

export default class LogItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        const { money } = this.props.data;
        let textChangeStyle = createTextChangeStyle(money);
        let topBorderColor = this.props.data.isFirst ? 'transparent' : colors.LIST_TOP_BORDER;
        let src = money >= 0 ? 'ios-cash-outline' : 'ios-cart-outline';
        return (
            <View style={styles.wrapper}>
                <LineDivider color={topBorderColor} />
                <View style={styles.container}>
                    <IOIcon size={30} name={src} />
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}> {this.props.data.title}</Text>
                        {createContent(this.props.data.created)}
                    </View>
                    <View style={styles.textChangeContainer}>
                        <Text style={textChangeStyle}>{Currency.convert(money)}</Text>
                    </View>
                    <IOButtonIcon
                        color="#999999"
                        name="ios-arrow-forward-outline"
                        onPress={() => {
                        }} />
                </View>
                <LineDivider color={colors.LIST_BOTTOM_BORDER} />
            </View>
        );
    }
}

const createTextChangeStyle = (change) => {
    let textChangeStyle = {
        fontFamily: fonts.OPEN_SAN,
        fontSize: 13,
        color: colors.GREEN
    };
    if (change < 0) {
        textChangeStyle.color = colors.RED;
    }
    return textChangeStyle;

};

const createContent = (content) => {
    if (content) {
        return (<Text style={styles.content}>{content}</Text>);
    }

};


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

