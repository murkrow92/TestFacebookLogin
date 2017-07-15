/**
 * Created by murkrow on 7/15/17.
 */
import React, {Component} from "react";
import {Keyboard} from "react-native";
import PageWrapper from "../../Commons/Wrapper";
import TopNavigationBar from "../../Commons/TopNavigationBar/index";
import ButtonLabel from "../../Commons/TopNavigationBar/ButtonLabel";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "./AddFriendAtions";
import AddFriendForm from "./AddFriendForm";

class AddFriendPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        const {actions, newFriend, profile} = this.props;
        console.log(newFriend);
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Thêm bạn mới"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton(() => {
                        Keyboard.dismiss();
                        actions.requestSave(profile, newFriend.friend);
                    })}/>
                <AddFriendForm
                    onFormChange={(key, value) => {
                        actions.onFormChange(key, value)
                    }}

                    onSubmit={() => actions.requestSave(profile, newFriend.friend)}
                />
            </ PageWrapper >
        )
            ;
    }
}

const rightButton = (onSubmit) => {
    return (<ButtonLabel
        onPress={onSubmit} label="Lưu lại"/>);
};


const mapStateToProps = (state) => ({
    newFriend: state.addFriend,
    profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendPage);