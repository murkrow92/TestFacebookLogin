/**
 * Created by murkrow on 6/17/17.
 */


import {AsyncStorage} from 'react-native';
import {API} from "../../lib/API";

export const ACTION_SAVE_SUCCESS = 'com.action.save.success';
export const ACTION_FORM_DATA_CHANGE = 'com.action.form.change';
export const ACTION_LOAD_SAVED_PROFILE = 'com.action.load.local.profile';
export const ACTION_FETCH_PROFILE_SUCCESS = "com.fetch.profile.success";

const api = new API();

export const saveProfileAsync = (profile) => (dispatch, getState) =>
    (api.saveProfile(profile).then(
        response => {
            doSaveProfile(response, dispatch);
        },
        error => {
            console.log(error);
            fetchLocalProfileAsync(dispatch, getState);
        }));


const doSaveProfile = (response, dispatch) => {
    const profile = response.data;
    let result = JSON.stringify(profile);
    AsyncStorage.setItem('profile', result).then(
        dispatch(requestSave(profile))
    ).catch(error => console.log(error));
};

const requestSave = (profile) => ({
    type: ACTION_SAVE_SUCCESS,
    profile
});

export const fetchUserProfileAsync = () => (dispatch, getState) => (
    api.fetchUserProfile().then(
        response => {
            const profile = response.data;
            dispatch(fetchProfileSuccess(profile));
        },
        error => {
            console.log(error);
            fetchLocalProfileAsync(dispatch, getState);
        }
    )
);

const fetchProfileSuccess = (profile) => ({
    type: ACTION_FETCH_PROFILE_SUCCESS,
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

const getLocalProfile = (profile) => ({
    type: ACTION_LOAD_SAVED_PROFILE,
    profile
});


export const onFormChange = (key, value) => ({
    type: ACTION_FORM_DATA_CHANGE,
    key, value
});