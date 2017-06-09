/**
 * Created by Murkrow on 5/30/2017.
 */
import React, {Component} from "react";
import {View} from "react-native";
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import colors from "../../styles/colors";

export default class LoginBox extends Component {
    render() {
        return (<Login/>);
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
    loginContainer: {
        borderRadius: 3,
        backgroundColor: colors.facebookBlue,
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
};
