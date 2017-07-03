/**
 * Created by murkrow on 6/13/17.
 */

import {Text, View, StyleSheet, Image, TouchableHighlight} from "react-native";
import React, {Component, PropTypes} from "react";
import colors from "../../styles/colors";
import {APP_MARGIN} from "../../styles/dimens";
import IOButtonIcon from "../Commons/TopNavigationBar/IOButtonIcon";
import fonts from "./../../styles/fonts";
import LineDivider from "../Commons/LineDivider";
import Background from "../../styles/images/ic_launcher.png";
import {QUESTION_TYPE_QUESTION} from "../../lib/questions";

export default class NotificationItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        let topBorderColor = this.props.data.isFirst ? 'transparent' : colors.LIST_TOP_BORDER;
        const conversionId = this.props.data.link_id;
        return (
            <TouchableHighlight
                onPress={() => this.goDetail(conversionId)}
                underlayColor='lightblue'>
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
                            onPress={() => this.goDetail(conversionId)}/>
                    </View>
                    <LineDivider color={colors.LIST_BOTTOM_BORDER}/>
                </View>
            </TouchableHighlight>
        )
    }

    goDetail(conversationId) {
        const navigate = this.props.navigate;
        navigate('Chat', {
            questionType: QUESTION_TYPE_QUESTION,
            conversationId: conversationId
        });
    }
}

const styles = StyleSheet.create(
    {
        wrapper: {
            flexDirection: 'column'
        },
        container: {
            marginTop: 5,
            marginBottom: 5,
            alignItems: 'center',
            marginLeft: APP_MARGIN,
            flex: 1,
            flexDirection: 'row'

        },
        icon: {
            borderRadius: 5,
            marginRight: 10,
            width: 40,
            height: 40
        },
        contentContainer: {
            marginLeft: 5,
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
            marginTop: 4,
            color: colors.LABEL
        }
    }
);