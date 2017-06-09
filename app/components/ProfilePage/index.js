/**
 * Created by Murkrow on 5/31/2017.
 */

import React, {Component} from "react";
import {Image, Text} from "react-native";
import PageWrapper from "../Commons/Wrapper";
import ProfileForm from "./ProfileForm";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Background from "../../styles/images/bg.jpg";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";
import ButtonLabel from "../Commons/TopNavigationBar/ButtonLabel";


export default class ProfilePage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Cá nhân"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <Image style={styles.avatar} source={Background}/>
                <Text style={styles.username}>Đoàn Phúc Bảo</Text>
                <ProfileForm/>
            </ PageWrapper >
        );
    }
}

const rightButton = () => {
    return (<ButtonLabel
        onPress={() => {
    }} label="Lưu lại"/>);
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