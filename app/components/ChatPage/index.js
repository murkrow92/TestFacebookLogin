/**
 * Created by Murkrow on 5/25/2017.
 */

import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import ListMessage from "./ListMessage";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";
import QuestionBox from "../DetailPage/QuestionBox";
import {View, StyleSheet, ScrollView} from "react-native";
import {APP_MARGIN} from "../../styles/dimens";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import {bindActionCreators} from "redux";
import * as actions from "./ChatActions";
import {connect} from "react-redux";
import LineDivider from "../Commons/LineDivider";
import ChatBox from "../Commons/ChatBox/index";
import Pusher from 'pusher-js/react-native';

const md5 = require('md5');
const lodash = require('lodash');
const MIN_HEIGHT = 56;
const APP_KEY = '4f086a0de734aa6e0a2e';
const pusher = new Pusher(APP_KEY, {
    cluster: 'ap1',
    encrypted: true,
    authEndpoint: "http://api.vnastro.com/1.0/notify/auth"
});

Pusher.logToConsole = true;

class ChatPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chatboxHeight: MIN_HEIGHT,
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const {chat} = this.props;
        console.log(chat);
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Tin nhắn"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <View style={styles.questionBoxContainer}>
                    {this.renderQuestionBox()}
                </View>
                <ScrollView>
                    {this.renderList()}
                </ScrollView>
                <LineDivider/>
                <ChatBox
                    height={this.state.chatboxHeight}
                    onSubmit={(message) => {
                        this.sendMessage(message);
                    }}
                    onHeightChanged={(deltaHeight) => this.onHeightChanged(deltaHeight)}
                />
            </PageWrapper>
        );
    }


    renderQuestionBox() {
        const {chat} = this.props;
        if (!lodash.isEmpty(chat.messages)) {
            return <QuestionBox
                content={chat.messages[1].content}
            />
        }

    }

    renderList() {
        const {chat, profile} = this.props;
        const messages = chat.messages;
        if (!lodash.isEmpty(messages)) {
            let items = getItems(messages);
            return <ListMessage
                profile={profile.profile}
                items={items}/>
        }
    }

    sendMessage(message) {
        const {params} = this.props.navigation.state;
        if (!lodash.isEmpty(params)) {
            this.triggerPushEvent(message);
        } else {

        }
    }

    triggerPushEvent(message) {
        const {profile, chat} = this.props;
        const {actions} = this.props;
        const encrypted = md5(profile.id);
        const channelName = "private-" + encrypted;
        const channel = pusher.channel(channelName);
        channel.trigger('', {
            channel_id: channelName,
            type: "chat",
            from: profile.id,
            to:chat.conversationId,
            messages: {
                text: message,
            }
        });
    }

    onHeightChanged(deltaHeight) {
        this.setState({
            chatboxHeight: MIN_HEIGHT + deltaHeight
        });
    }

    componentDidMount() {
        const {actions, profile} = this.props;
        const {params} = this.props.navigation.state;
        const encrypted = md5(profile.id);
        const channel = pusher.subscribe("private-" + encrypted);
        channel.bind('chat', function (data) {
            alert(data.message);
        });
        if (!lodash.isEmpty(params)) {
            actions.fetchConversationAsync(params.conversationId);
        }
    }
}

const getItems = (list) => {
    let items = [];
    lodash.forEach(list, function (value, key) {
        items.push(value);
    });
    items[0].isFirst = true;
    return items;
};

const rightButton = () => {
    return (<ButtonIcon
        icon="chart-pie-1"
        onPress={() => {
        }}/>);
};

const styles = StyleSheet.create({
    questionBoxContainer: {
        paddingLeft: APP_MARGIN,
        paddingRight: APP_MARGIN
    },
    answerBox: {
        marginTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        backgroundColor: colors.LIST_TOP_BORDER

    },
    answer: {
        padding: 6,
        color: colors.BLACK,
        fontSize: 13,
        fontFamily: fonts.ARIAL
    }
});

const mapStateToProps = (state) => ({
    chat: state.chat,
    profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);




