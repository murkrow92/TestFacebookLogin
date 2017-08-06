import React, {Component} from 'react';
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ListConversation from "./ListConversation";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "./ConversationActions";
import {ScrollView} from "react-native";

let lodash = require('lodash');

class ConversationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Danh sách câu hỏi"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                {this.renderList()}
            </PageWrapper>
        );
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.fetchConversationsAsync();
    }

    renderList() {
        const {navigate} = this.props.navigation;
        const {list} = this.props.conversations;
        const {data} = this.props.login;
        if (!lodash.isEmpty(list)) {
            let items = getItems(list);
            return <ListConversation
                facebook={data}
                navigate={navigate}
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
    return {
        title: ''
    };
};


const mapStateToProps = (state) => ({
    conversations: state.conversations,
    login: state.login
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ConversationPage);