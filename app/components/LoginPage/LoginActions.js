import {API} from "../../lib/API";
import {AsyncStorage} from "react-native";

const FBSDK = require("react-native-fbsdk");
const {GraphRequest, GraphRequestManager} = FBSDK;

export const ACTION_LOGIN_SUCCESS = 'action.com.login';
export const ACTION_FETCH_FACEBOOK_SUCCESS = 'action_fetch_facebook_success';

const api = new API();

const loginSuccess = (response) => ({
    type: ACTION_LOGIN_SUCCESS,
    response
});

export const login = (email, facebookId) => (dispatch, getState) => (
    api.login(email, facebookId).then(
        response => {
            if (response.access_token) {
                dispatch(loginSuccess(response));
            }
        },
        error => console.log(error)
    )).catch(error => console.log(error));

const fetchFacebookSuccess = (facebook) => ({
    type: ACTION_FETCH_FACEBOOK_SUCCESS,
    facebook
});

export const fetchFacebookAsync = (accessToken) => (dispatch, getState) => {
    const callback = (error, result) => {
        if (result) {
            let info = JSON.stringify(result);
            AsyncStorage.setItem("facebook", info);
            dispatch(fetchFacebookSuccess(result));
        } else {
            console.log(error);
        }
    };
    const infoRequest = new GraphRequest(
        "/me", {
            parameters: {
                fields: {
                    string: "email,name,friends,picture"
                },
                access_token: {
                    string: accessToken
                }
            }
        },
        callback
    );
    return new GraphRequestManager().addRequest(infoRequest).start();
};
