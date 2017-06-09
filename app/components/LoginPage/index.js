/**
 * Created by Murkrow on 5/29/2017.
 */
import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import {Button, Image, View} from "react-native";
import Logo from "../../styles/images/vnastro.png";
import LoginBox from "./LoginBox";
import colors from "../../styles/colors";

export default class LoginPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <View style={styles.background}>
                    <Image style={styles.logo} source={Logo}/>
                    <LoginBox/>
                    <Button
                        onPress={() => {
                            navigate('Content')
                        }}
                        title="CLICK HERE"/>
                </View>
            </PageWrapper>
        );
    }
}


const styles = {
    logo: {
        width: 150,
        height: 150,
        resizeMode:'contain',
        marginBottom:60,
        marginTop:60

    },
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.BACKGROUND_LOGIN
    },

};