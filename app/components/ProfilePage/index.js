/**
 * Created by Murkrow on 5/31/2017.
 */

import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBarWithSideBar from "../Commons/TopNavigationBar/TopNavigationBarWithSideBar";
import colors from "../../styles/colors";
import Background from "../../styles/images/bg.jpg";
import {Image, Text} from "react-native";

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
                <Text style={styles.username}>'Đoàn Phúc Bảo'</Text>
            </PageWrapper>
        );
    }
}

const rightButton = {
    title: 'Lưu lại',
    tintColor: colors.blue,
};

const styles = {
    avatar: {
        marginTop: 16,
        alignSelf: 'center',
        borderWidth: 1,
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    username: {
        marginTop: 8,
        alignSelf: 'center'
    }
};