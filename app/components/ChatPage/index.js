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


let lodash = require('lodash');

const MIN_HEIGHT = 56;

Pusher.logToConsole = true;

const pusher = new Pusher('4f086a0de734aa6e0a2e', {
    cluster: 'ap1',
    encrypted: true
});

let channel;

class ChatPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chatboxHeight: MIN_HEIGHT,
        }
    }

    render() {
        const {navigate} = this.props.navigation;
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
        const {profile, chat} = this.props;
        if (!lodash.isEmpty(params)) {

        } else {
            // channel.trigger('client-notify', {
            //     channel_id: profile.id,
            //     type: "chat",
            //     from: profile.id,
            //     to: chat.conservationId,
            //     messages: {
            //         text: message
            //     },
            // });
        }
    }

    onHeightChanged(deltaHeight) {
        this.setState({
            chatboxHeight: MIN_HEIGHT + deltaHeight
        });
    }

    componentDidMount() {

        const {actions, profile} = this.props;
        const {params} = this.props.navigation.state;
        if (!lodash.isEmpty(params)) {
            actions.fetchConversationAsync(params.conversationId);
        }
        // channel = pusher.subscribe("general");
        // channel.bind('notify', function (data) {
        //     alert(data.message);
        // });
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




