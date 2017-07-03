/**
 * Created by murkrow on 6/13/17.
 */

import React, {Component} from 'react';
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ListNotification from "./ListNotification";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "./NotificationActions";
import {ScrollView} from "react-native";
let lodash = require('lodash');

class NotificationPage extends Component {
    constructor(props) {
        super(props);
        const {actions} = this.props;
        actions.fetchNotificationsAsync();
    }

    render() {
        const {navigate} = this.props.navigation;
        const {list} = this.props.notifications;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Thông báo"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <ScrollView>
                    {this.renderList(list, navigate)}
                </ScrollView>
            </PageWrapper>
        );
    }

    renderList(list, navigate) {
        if (!lodash.isEmpty(list)) {
            let items = getItems(list);
            return <ListNotification items={items}/>
        }
    }
}

const getItems = (list) => {
    let items = [];
    lodash.forEach(list, function (value, key) {
        items.push(value);
    });
    items[0].isFirst = true;
    console.log(items);
    return items;
};

const rightButton = () => {
    return {
        title: ''
    };
};


const mapStateToProps = (state) => ({
    notifications: state.notifications,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(NotificationPage);