/**
 * Created by Murkrow on 5/31/2017.
 */

import React, {Component} from "react";
import {Image, Text} from "react-native";
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBarWithSideBar from "../Commons/TopNavigationBar/TopNavigationBarWithSideBar";
import ProfileForm from "./ProfileForm";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Background from "../../styles/images/bg.jpg";


export default class ProfilePage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBarWithSideBar
                    title="Cá nhân"
                    rightButton="Lưu lại"
                    onLeftButtonPress={() => navigate('DrawerOpen')}
                    rightButtonType="label"/>

                <Image style={styles.avatar} source={Background}/>
                <Text style={styles.username}>Đoàn Phúc Bảo</Text>
                <ProfileForm/>
            </ PageWrapper >
        );
    }
}

const styles = {
    container: {
        flex: 1,
    },
    avatar: {
        marginTop: 25,
        alignSelf: 'center',
        borderWidth: 1,
        width: 76,
        height: 76,
        borderRadius: 38,
        borderColor: colors.BORDER_GREY,
    },
    username: {
        fontFamily: fonts.OPEN_SAN,
        color: colors.BLACK,
        marginTop: 8,
        alignSelf: 'center',
        fontSize: 13,
        marginBottom:30
    }
};