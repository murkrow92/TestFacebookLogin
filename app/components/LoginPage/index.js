/**
 * Created by Murkrow on 5/29/2017.
 */
import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import {Button, Image, View} from "react-native";
import Logo from "../../styles/images/vnastro.png";
import LoginBox from "./LoginBox";
import colors from "../../styles/colors";
import  {AccessToken} from "react-native-fbsdk";
import FacebookManager from "../../lib/FacebookManager";

export default class LoginPage extends Component {

    constructor(props) {
        super(props);

        AccessToken.getCurrentAccessToken().then(
            (data) => {
                if (data !== null) {
                    this.login();
                }
            }
        );
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <View style={styles.background}>
                    <Image style={styles.logo} source={Logo}/>
                    <LoginBox onLogin={() => {
                        this.login();
                    }}/>
                    <Button
                        onPress={() => {
                            navigate('Content');
                        }}
                        title="CLICK HERE"/>
                </View>
            </PageWrapper>
        );
    }

    login() {
        const {navigate} = this.props.navigation;
        FacebookManager.fetchUserInfo();
        navigate('Content');
    }
}

const styles = {
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 60,
        marginTop: 60

    },
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.BACKGROUND_LOGIN
    },

};