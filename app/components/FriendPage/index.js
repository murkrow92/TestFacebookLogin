/**
 * Created by murkrow on 6/13/17.
 */

import React, {Component} from 'react';
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import {View, StyleSheet} from "react-native";
import SearchBox from "../Commons/SearchBox";
import {APP_MARGIN} from "../../styles/dimens";
import ListFriend from "./ListFriend";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "./FriendActions";

const lodash = require('lodash');

class FriendPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywordSearch: ''
        };
    }

    render() {
        console.log(this.state.keywordSearch);
        const {navigate} = this.props.navigation;
        const {friend} = this.props.friend;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Bạn bè"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <View style={styles.searchBoxContainer}>
                    <SearchBox
                        onChangeText={(text) => this.search(text)}
                    />
                </View>
                {this.renderList(friend, navigate)}
            </PageWrapper>
        );
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.fetchFriendAsync();
    }

    renderList(friends, navigate) {
        if (!lodash.isEmpty(friends)) {
            let items = this.getItems(friends);
            return <ListFriend
                navigate={navigate}
                items={items}/>
        }
    }

    getItems(friends) {
        const keyword = this.state.keywordSearch;
        let items = [];
        lodash.forEach(friends, function (value, key) {
            if (keyword === '') {
                items.push(value);
            } else if (value.name.includes(keyword)) {
                items.push(value);
            }
        });
        return items;
    }

    search(text) {
        this.setState({
            keywordSearch: text
        });
    }
}

const rightButton = () => {
    return (<ButtonIcon
        size={20}
        icon="user-add" onPress={() => {
    }}/>);
};

const styles = StyleSheet.create({
    searchBoxContainer: {
        marginLeft: APP_MARGIN,
        marginRight: APP_MARGIN
    }
});

const mapStateToProps = (state) => ({
    friend: state.friend
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(FriendPage);