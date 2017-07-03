/**
 * Created by murkrow on 7/1/17.
 */


import {AsyncStorage} from "react-native";
export const GET_PROFILE_FROM_LOCAL = "get_profile_from_local";

const getLocalProfile = (profile) => ({
    type: GET_PROFILE_FROM_LOCAL,
    profile
});

export const getLocalProfileAsync = () => (dispatch, getState) =>
    AsyncStorage.getItem('profile').then(
        value => {
            if (value === null) {
                return Promise.resolve();
            }
            let profile = JSON.parse(value).profile;
            dispatch(getLocalProfile(profile));
        },
        error => alert('Error: ' + error.message)
    );
