/**
 * Created by Murkrow on 5/31/2017.
 */

import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBarWithSideBar from "../Commons/TopNavigationBar/TopNavigationBarWithSideBar";
import colors from "../../styles/colors";
import Background from "../../styles/images/bg.jpg";
import {Image, Text, KeyboardAvoidingView} from "react-native";
import ProfileForm from "./ProfileForm";


export default class ProfilePage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBarWithSideBar
                    title="Cá nhân"
                    rightButton={rightButton}
                    onLeftButtonPress={() => navigate('DrawerOpen')}/>
                <Image style={styles.avatar} source={Background}/>
                <Text style={styles.username}>Đoàn Phúc Bảo</Text>
                <ProfileForm/>
            </ PageWrapper >
        );
    }
}

const rightButton = {
    title: 'Lưu lại',
    tintColor: colors.BLUE,
};

const styles = {
    container: {
        flex: 1,
    },
    avatar: {
        marginTop: 16,
        alignSelf: 'center',
        borderWidth: 1,
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    username: {
        color:'#000000',
        marginTop: 8,
        alignSelf: 'center'
    }
};