/**
 * Created by murkrow on 6/17/17.
 */

import {AsyncStorage} from 'react-native';

export const REQUEST_SAVE = 'request_save';
export const FORM_CHANGE = 'form_change';
export const GET_PROFILE_FROM_LOCAL = 'profile_load_from_local';


function getLocalProfile(profile) {
    return ({
        type: GET_PROFILE_FROM_LOCAL,
        profile
    });
}

export const getLocalProfileAsync = () => {
    return async (dispatch, getState) => {
        try {
            const value = await AsyncStorage.getItem('profile');
            const facebook = await AsyncStorage.getItem('facebook');
            if (value !== null) {
                let profile = JSON.parse(value).profile;
                alert("profile: " + JSON.stringify(profile));

                if (facebook !== null) {
                    profile.name = facebook.name;
                    profile.id = facebook.id;
                }
                dispatch(getLocalProfile(profile));
            }
        } catch (error) {
            alert('error: ' + error);
            // Error retrieving data
        }
    }
};


export const requestSave = (profile) => ({
    type: REQUEST_SAVE,
    profile
});

export const onFormChange = (key, value) => ({
    type: FORM_CHANGE,
    key, value
});