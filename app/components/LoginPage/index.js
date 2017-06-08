/**
 * Created by Murkrow on 5/29/2017.
 */
import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import {Button, Image, View} from "react-native";

import Background from '../../styles/images/bg.jpg';
import LoginBox from "./LoginBox";
import colors from "../../styles/colors";

export default class LoginPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                {/*<Image source={Background} style={styles.container}>*/}
                {/*<LoginBox/>*/}
                {/*<Button*/}
                {/*onPress={() => {*/}
                {/*navigate('Home')*/}
                {/*}}*/}
                {/*title="CLICK HERE"/>*/}
                {/*</Image>*/}
                <View style={styles.background}>


                </View>
            </PageWrapper>
        );
    }
}


const styles = {
    background: {
        flex:1,
        backgroundColor: colors.BACKGROUND_LOGIN
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover', //'cover' or 'stretch'
    }
};