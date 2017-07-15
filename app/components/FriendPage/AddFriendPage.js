/**
 * Created by murkrow on 7/15/17.
 */
import React, {Component} from "react";
import {Text, Keyboard} from "react-native";
import PageWrapper from "../Commons/Wrapper";
import ProfileForm from "../ProfilePage/ProfileForm";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonLabel from "../Commons/TopNavigationBar/ButtonLabel";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "./FriendActions";
import AddFriendForm from "./AddFriendForm";

class AddFriendPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        const {actions, friend} = this.props;

        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Thêm bạn mới"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton(() => {
                        Keyboard.dismiss();
                    })}/>
                <AddFriendForm
                    friend={friend}
                    actions={actions}
                />
            </ PageWrapper >
        );
    }

    componentDidMount() {
        const {actions} = this.props;
    }
}

const rightButton = (onSubmit) => {
    return (<ButtonLabel
        onPress={onSubmit} label="Lưu lại"/>);
};


const mapStateToProps = (state) => ({
    friend: state.friend,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendPage);