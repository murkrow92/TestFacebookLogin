/**
 * Created by murkrow on 6/17/17.
 */


import {AsyncStorage} from 'react-native';
import {API} from "../../lib/API";

export const REQUEST_SAVE = 'request_save';
export const FORM_CHANGE = 'form_change';
export const GET_PROFILE_FROM_LOCAL = 'profile_load_from_local';

const api = new API();

const getLocalProfile = (profile) => ({
    type: GET_PROFILE_FROM_LOCAL,
    profile
});

export const fetchLocalProfileAsync = () => (dispatch, getState) =>
    AsyncStorage.getItem('profile').then(
        value => {
            if (value === null) {
                return Promise.resolve();
            }
            let profile = JSON.parse(value);
            dispatch(getLocalProfile(profile));
        },
        error => alert('Error: ' + error.message)
    );

export const fetchFacebookProfileAsync = () => (dispatch, getState) =>
    AsyncStorage.getItem('facebook').then(
        value => {
            if (value === null) {
                return Promise.resolve();
            }
            let profile = JSON.parse(value);
            dispatch(getLocalProfile(profile));
        }
    );

export const saveProfileAsync = (profile) => (dispatch, getState) =>
    (api.saveProfile(profile).then(
        response => {
            let result = JSON.stringify(profile);
            AsyncStorage.setItem('profile', result).then(
                dispatch(requestSave(profile))
            ).catch(error => console.log(error));

        },
        error => {
            console.log(error);
        }));


const requestSave = (profile) => ({
    type: REQUEST_SAVE,
    profile
});

export const onFormChange = (key, value) => ({
    type: FORM_CHANGE,
    key, value
});