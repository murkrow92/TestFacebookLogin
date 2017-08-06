import React, {Component, PropTypes} from "react";
import {Image, Text, TouchableHighlight, View, StyleSheet} from "react-native";
import LineDivider from "../Commons/LineDivider";
import IOButtonIcon from "../Commons/TopNavigationBar/IOButtonIcon";
import colors from "../../styles/colors";
import {APP_MARGIN} from "../../styles/dimens";
import fonts from "../../styles/fonts";
import BlankProfile from "../../styles/images/vnastro.png"

export default class ConversationItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        const {firstMessage, lastMessage} = this.props.data;
        return (
            <TouchableHighlight
                onPress={() => this.goDetail()}
                underlayColor='lightblue'>
                <View style={styles.wrapper}>
                    <LineDivider color={colors.LIST_TOP_BORDER}/>
                    <View style={styles.container}>
                        <Image source={this.getPicture()} style={styles.icon}/>
                        <View style={styles.contentContainer}>
                            <Text style={styles.title}>{firstMessage.content}</Text>
                            <Text style={styles.content}>{lastMessage.content}</Text>
                        </View>
                        <IOButtonIcon
                            name="ios-arrow-forward-outline"
                            onPress={() => this.goDetail()}/>
                    </View>
                    <LineDivider color={colors.LIST_BOTTOM_BORDER}/>
                </View>
            </TouchableHighlight>);
    }

    goDetail() {
        const {id} = this.props.data;
        const {navigate} = this.props;
        navigate('Chat', {conversationId: id});
    }

    getPicture() {
        const {lastMessage} = this.props.data;
        const {facebook} = this.props;
        let picture = BlankProfile;
        if (lastMessage.user_id === this.props.data.user_id) {
            if (typeof(facebook.picture) === "object") {
                picture = {
                    uri: facebook.picture.data.url
                }
            }
        }
        return picture;
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
            marginTop: 8,
            color: colors.LABEL
        }
    }
);