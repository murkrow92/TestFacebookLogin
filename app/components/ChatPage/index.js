/**
 * Created by Murkrow on 5/25/2017.
 */

import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import ChatBox from "../Commons/ChatBox/index";
import ListMessage from "./ListMessage";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";

export default class ChatPage extends Component {
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
                <ListMessage items={items}/>
                <ChatBox/>
            </PageWrapper>
        );
    }
}
const rightButton = () => {
    return (<ButtonIcon icon="chart-pie-1" onPress={() => {
    }}/>);
};






