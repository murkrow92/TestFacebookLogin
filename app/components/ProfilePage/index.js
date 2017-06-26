/**
 * Created by Murkrow on 5/31/2017.
 */

import React, {Component} from "react";
import {Image, Text, Keyboard} from "react-native";
import PageWrapper from "../Commons/Wrapper";
import ProfileForm from "./ProfileForm";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Background from "../../styles/images/bg.jpg";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonLabel from "../Commons/TopNavigationBar/ButtonLabel";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "./ProfileActions";
import FacebookManager from "../../lib/FacebookManager";


class ProfilePage extends Component {

    constructor(props){
        super(props);
        const {actions} = this.props;
        actions.getLocalProfileAsync();
        FacebookManager.fetchUserInfo();
    }

    render() {
        const {navigate} = this.props.navigation;
        const {profile, actions} = this.props;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Cá nhân"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton(()=>{
                        Keyboard.dismiss();
                        actions.requestSave(profile)})}/>
                <Image style={styles.avatar} source={Background}/>
                <Text style={styles.username}>Đoàn Phúc Bảo</Text>
                <ProfileForm
                    actions={actions}
                    profile={profile.profile}/>
            </ PageWrapper >
        );
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);