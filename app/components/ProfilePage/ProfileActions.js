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
            let facebook = await AsyncStorage.getItem('facebook');
            if (value !== null) {
                let profile = JSON.parse(value).profile;

                dispatch(getLocalProfile(profile));
            }
        } catch (error) {
            alert('error: ' + error);
        }
    }
};

export const getFacebookProfileAsync = () => {
    return async (dispatch, getState) => {
        try {
            let profile = await AsyncStorage.getItem('facebook');
            if (profile !== null) {
                profile = JSON.parse(profile);
            }
            dispatch(getLocalProfile(profile));

        } catch (error) {
            alert('error: ' + error);
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