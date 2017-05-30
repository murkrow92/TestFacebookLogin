/**
 * Created by Murkrow on 5/30/2017.
 */
import React, {Component} from "react";
import {Text, View} from "react-native";
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import colors from "../../styles/colors";

export default class LoginBox extends Component {
    render() {
        return (
            <View style={styles.boxContainer}>
                <Text style={styles.title}>Đăng nhập</Text>
                <View style={styles.contentContainer}>
                    <Text style={styles.content}>Đăng nhập bằng Facebook để bắt đầu khám phá</Text>
                    <Login/>
                </View>
            </View>);
    }
}

let Login = React.createClass({
    render: function () {
        return (
            <View style={styles.loginContainer} underlayColor='#3b5998'>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        alert(data.accessToken.toString())
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => alert("logout.")}/>
            </View>
        );
    }
});

const styles = {

    boxContainer: {
        borderRadius: 10,
        width: 240,
        height: 240,
        backgroundColor: 'white'

    },
    title: {
        marginTop: 16,
        alignSelf: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 16,
        marginTop: 24,
        fontSize: 16
    },
    loginContainer: {
        borderRadius: 3,
        backgroundColor: colors.facebookBlue,
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
};
