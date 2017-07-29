/**
 * Created by Murkrow on 5/31/2017.
 */

import React, {Component} from "react";
import {Image, Text, Keyboard} from "react-native";
import PageWrapper from "../Commons/Wrapper";
import ProfileForm from "./ProfileForm";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import BlankProfile from "../../styles/images/blank_profile.png";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonLabel from "../Commons/TopNavigationBar/ButtonLabel";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "./ProfileActions";


class ProfilePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        const {profile, login} = this.props;
        let picture = BlankProfile;
        if (typeof(login.data.picture) === "object") {
            picture = {
                uri: login.data.picture.data.url
            }
        }

        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Cá nhân"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton(() => this.doSaveProfile(profile.data))}/>
                <Image
                    style={styles.avatar}
                    source={picture}/>
                <Text style={styles.username}>{profile.data.name}</Text>
                <ProfileForm
                    onFormChange={(key, value) => this.onFormChange(key, value)}
                    obSubmit={() => this.doSaveProfile(profile.profile)}
                    profile={profile.data}/>
            </ PageWrapper>
        );
    }

    onFormChange(key, value) {
        const {actions} = this.props;
        actions.onFormChange(key, value);
    }

    doSaveProfile(profile) {
        const {actions} = this.props;
        Keyboard.dismiss();
        actions.saveProfileAsync(profile);
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.fetchUserProfileAsync();
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
    login: state.login
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);