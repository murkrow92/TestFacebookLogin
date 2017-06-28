/**
 * Created by murkrow on 6/26/17.
 */

const FBSDK = require('react-native-fbsdk');
import {AsyncStorage} from "react-native";
import {AccessToken} from 'react-native-fbsdk';

const {
    GraphRequest,
    GraphRequestManager,
} = FBSDK;

export default class FacebookManager {

    static fetchUserInfo() {
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                let infoRequest = new GraphRequest('/me', {
                    parameters: {
                        fields: {
                            string: 'email,name,friends,picture'
                        },
                        access_token: {
                            string: data.accessToken
                        }
                    }
                }, callback);
                new GraphRequestManager().addRequest(infoRequest).start();
            }
        );
    }
}

const callback = (error, result) => {
    if (error) {
        alert('Error fetching data: ' + JSON.stringify(error));
    } else {
        let info = JSON.stringify(result);
        console.log(info);
        AsyncStorage.setItem('facebook', info);
    }
};
