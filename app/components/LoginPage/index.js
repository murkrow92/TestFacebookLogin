/**
 * Created by Murkrow on 5/29/2017.
 */
import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import {Image} from "react-native";

import Background from '../../styles/images/bg.jpg';
import LoginBox from "./LoginBox";

export default class LoginPage extends Component {
    render() {
        return (
            <PageWrapper>
                <Image source={Background} style={styles.container}>
                    <LoginBox
                        onLoginSuccess={() => this.onLoginSuccess}
                    />
                </Image>
            </PageWrapper>
        );
    }

    onLoginSuccess() {
        alert('Login rồi nhé');
    }
}


const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover', //'cover' or 'stretch'
    }
};