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
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "./LoginActions";


class LoginPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageWrapper>
                <View style={styles.background}>
                    <Image style={styles.logo} source={Logo}/>
                    <LoginBox onLogin={() => {
                        this.doLogin();
                    }}/>
                </View>
            </PageWrapper>
        );
    }

    componentDidMount() {
        this.doLogin();
    }

    doLogin() {
        const {actions} = this.props;
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                if (data !== null) {
                    actions.fetchFacebookAsync(data.accessToken);
                }
            }
        );
    }

    componentDidUpdate() {
        const {actions} = this.props;
        const {data} = this.props.login;
        const {navigate} = this.props.navigation;
        console.log(data);
        if (data.isLoggedIn) {
            navigate('Content');
        } else if (data.isFacebookLoggedIn) {
            actions.login(data.email, data.id);
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

const mapStateToProps = (state) => ({
    login: state.login,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);