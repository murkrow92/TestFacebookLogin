/**
 * Created by Murkrow on 5/29/2017.
 */
import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import {Button, Image, View, AsyncStorage} from "react-native";
import Logo from "../../styles/images/vnastro.png";
import LoginBox from "./LoginBox";
import colors from "../../styles/colors";
import {AccessToken} from "react-native-fbsdk";
import FacebookManager from "../../lib/FacebookManager";
import {API} from "../../lib/API";

const api = new API();

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
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

    componentDidMount() {
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                if (data !== null) {
                    this.login();
                }
            }
        );
    }

    login() {
        FacebookManager.fetchUserInfo((error, result) => this.callback(error, result));
    }

    callback(error, result) {
        const {navigate} = this.props.navigation;
        if (error) {
            alert("Error fetching data: " + JSON.stringify(error));
        } else {
            let info = JSON.stringify(result);
            AsyncStorage.setItem("facebook", info);
            api.login(result.email, result.id).then(
                response => {
                    console.log(response);
                    if (response.access_token) {
                        AsyncStorage.setItem("accessToken", response.access_token);
                        navigate("Content");
                    }
                },
                error => {
                    console.log(error);
                }
            );
        }
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