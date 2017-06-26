/**
 * Created by murkrow on 6/26/17.
 */

const FBSDK = require('react-native-fbsdk');
import {AsyncStorage} from "react-native";
const {
    GraphRequest,
    GraphRequestManager,
} = FBSDK;

export default class FacebookManager {

    static fetchUserInfo() {
        let infoRequest = new GraphRequest('/me', null, callback);
        new GraphRequestManager().addRequest(infoRequest).start();
    }

}

const callback = (error, result) => {
    if (error) {
        //alert('Error fetching data: ' + JSON.stringify(error));
    } else {
        let info = JSON.stringify(result);
        // alert('Success fetching data: ' + info);
        AsyncStorage.setItem('facebook', info);
    }
};


// Start the graph request.
