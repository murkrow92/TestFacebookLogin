/**
 * Created by Murkrow on 5/25/2017.
 */

import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import ChatBox from "../Commons/ChatBox/index";
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

let lodash = require('lodash');

class ChatPage extends Component {

    constructor(props) {
        super(props);
        const {actions} = this.props;
        const {params} = this.props.navigation.state;
        actions.fetchConversationAsync(params.conversationId);
    }

    render() {
        const {chat, profile} = this.props;
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Tin nhắn"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <View style={styles.questionBoxContainer}>
                    {this.renderQuestionBox(chat.messages)}
                </View>
                <ScrollView>
                    {this.renderList(chat.messages, profile.profile)}
                </ScrollView>
                <ChatBox/>
            </PageWrapper>
        );
    }

    renderQuestionBox(messages) {
        if (!lodash.isEmpty(messages)) {
            return <QuestionBox
                content={messages[0].content}
            />
        }

    }

    renderList(messages, profile) {
        if (!lodash.isEmpty(messages)) {
            let items = getItems(messages);
            return <ListMessage
                profile={profile}
                items={items}/>
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




