/**
 * Created by murkrow on 6/26/17.
 */

const FBSDK = require("react-native-fbsdk");

import { AccessToken } from "react-native-fbsdk";

const { GraphRequest, GraphRequestManager } = FBSDK;

export default class FacebookManager {
    static fetchUserInfo(callback) {
        AccessToken.getCurrentAccessToken().then(data => {
            let infoRequest = new GraphRequest(
                "/me",
                {
                    parameters: {
                        fields: {
                            string: "email,name,friends,picture"
                        },
                        access_token: {
                            string: data.accessToken
                        }
                    }
                },
                callback
            );
            new GraphRequestManager().addRequest(infoRequest).start();
        });
    }
}


