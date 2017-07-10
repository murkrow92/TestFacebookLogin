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


class FriendPage extends Component {
    constructor(props) {
        super(props);
        const {actions} = this.props;
        actions.fetchFriendAsync();
    }

    render() {
        const {navigate} = this.props.navigation;
        console.log(this.props.friend.friend);

        let item1 = {
            avatar: "Hello World",
            name: "Đoàn Phúc Bảo",
            birthday: '21h ngày 5/10/1992',
            onPress: () => {
                navigate('Detail');
            }
        };
        let item2 = {
            avatar: "Hello World",
            name: "Biển Ngọc",
            birthday: '21h ngày 5/10/1992',
            onPress: () => {
                navigate('Detail');
            }
        };

        let items = [item1, item2];
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Bạn bè"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <View style={styles.searchBoxContainer}>
                    <SearchBox/>
                </View>
                <ListFriend items={items}/>

            </PageWrapper>
        );
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