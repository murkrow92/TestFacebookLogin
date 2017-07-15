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

class AddFriendPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        const {profile, actions} = this.props;


        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Thêm bạn mới"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton(() => {
                        Keyboard.dismiss();
                    })}/>
                <Text style={styles.username}>{profile.profile.name}</Text>
                <ProfileForm
                    actions={actions}
                    profile={profile.profile}/>
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

const styles = {

    avatar: {
        marginTop: 25,
        alignSelf: 'center',
        borderWidth: 1,
        width: 76,
        height: 76,
        borderRadius: 38
    },
    username: {
        fontFamily: fonts.OPEN_SAN,
        color: colors.BLACK,
        marginTop: 8,
        alignSelf: 'center',
        fontSize: 13,
        marginBottom: 30
    }
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendPage);