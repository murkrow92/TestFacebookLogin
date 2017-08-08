/**
 * Created by Murkrow on 5/25/2017.
 */

import React, { Component } from "react";
import PageWrapper from "../Commons/Wrapper";
import ListMessage from "./ListMessage";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";
import QuestionBox from "../DetailPage/QuestionBox";
import { View, StyleSheet, ScrollView, Keyboard } from "react-native";
import { APP_MARGIN } from "../../styles/dimens";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { bindActionCreators } from "redux";
import * as actions from "./ChatActions";
import { connect } from "react-redux";
import LineDivider from "../Commons/LineDivider";
import ChatBox from "../Commons/ChatBox/index";
import Pusher from 'pusher-js/react-native';

const md5 = require('md5');
const lodash = require('lodash');
const MIN_HEIGHT = 56;
const APP_KEY = '4f086a0de734aa6e0a2e';
const APP_AUTH_ENDPOINT = "http://api.vnastro.com/1.0/notify/auth";
const APP_CLUSTER = 'ap1';

const pusher = new Pusher(APP_KEY, {
    cluster: APP_CLUSTER,
    encrypted: true,
    authEndpoint: APP_AUTH_ENDPOINT
});

Pusher.logToConsole = false;

class ChatPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chatboxHeight: MIN_HEIGHT,
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { chat } = this.props;
        const text = chat.messages.text;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Tin nhắn"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()} />
                <View style={styles.questionBoxContainer}>
                    {this.renderQuestionBox()}
                </View>
                <ScrollView>
                    {this.renderList()}
                </ScrollView>
                <LineDivider />
                <ChatBox
                    message={text}
                    onChangeText={(newText) => this.onChangeText(newText)}
                    height={this.state.chatboxHeight}
                    onSubmit={(newText) => {
                        this.sendMessage(newText);
                    }}
                    onHeightChanged={(deltaHeight) =>
                        this.onHeightChanged(deltaHeight)}
                />
            </PageWrapper>
        );
    }

    renderQuestionBox() {
        const { messages } = this.props.chat;
        if (!lodash.isEmpty(messages.messages)) {
            return <QuestionBox
                content={messages.messages[messages.message_id].content}
            />
        }
    }

    renderList() {
        const { chat, profile, login } = this.props;
        const { messages } = chat.messages;
        if (!lodash.isEmpty(messages)) {
            let items = getItems(messages);
            return <ListMessage
                facebook={login.data}
                profile={profile.data}
                items={items} />
        }
    }

    sendMessage(text) {
        Keyboard.dismiss();
        const { params } = this.props.navigation.state;
        if (lodash.isEmpty(params)) {
            this.createConversation(text);
        } else {
            this.addMessage(text);
        }
    }

    createConversation(message) {
        const { actions } = this.props;
        actions.addConversationAsync(message);
    }

    addMessage(message) {
        const { actions } = this.props;
        actions.addMessageAsync(message);
    }

    onChangeText(text) {
        const { actions } = this.props;
        actions.onChangeText(text);
    }

    onHeightChanged(deltaHeight) {
        this.setState({
            chatboxHeight: MIN_HEIGHT + deltaHeight
        });
    }

    componentDidMount() {
        this.registerChannel();
        this.fetchConversation();
    }

    registerChannel() {
        const { id } = this.props.profile.data;
        if (!id) {
            return;
        }
        const encrypted = md5("vnAstro" + id);
        const channel = pusher.subscribe("private-" + encrypted);
        channel.bind('client-chat', function (data) {
            console.log(data);
            this.fetchConversation();
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { chat } = this.props;
        if (chat.messages.needFetch) {
            this.fetchConversation();
        }
    }

    fetchConversation() {
        const { actions, chat } = this.props;
        const { params } = this.props.navigation.state;
        if (lodash.isEmpty(params)) {
            if (chat.messages.id) {
                actions.fetchConversationAsync(chat.messages.id)
            }
        } else {
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
        }} />);
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
    profile: state.profile,
    login: state.login
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);




