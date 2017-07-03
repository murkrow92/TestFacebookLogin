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

export default class ChatPage extends Component {

    constructor(props){
        super(props);
        const {actions} = this.props;
        const {navigate} = this.props.navigation;
        const {params} = navigate.state;
        actions.fetchConversation(params.conversationId);
    }

    render() {
        let item1 = {
            content: "Fill in your birth data Fill in your birth data Fill in your birth data Fill in your birth data Fill in your birth data",
            datetime: "12/02/1992",
            user: "System"
        };
        let item2 = {
            content: "Ask your Astrologer",
            datetime: "12/02/1992",
            user: "user"
        };
        let item3 = {
            content: "Receive your answer",
            datetime: "12/02/1992",
            user: "System"
        };
        let items = [item1, item2, item3];
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Tin nhắn"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <View style={styles.questionBoxContainer}>
                    <QuestionBox/>
                </View>
                <ScrollView>
                    <ListMessage items={items}/>
                </ScrollView>
                <ChatBox/>
            </PageWrapper>
        );
    }
}
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
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);




