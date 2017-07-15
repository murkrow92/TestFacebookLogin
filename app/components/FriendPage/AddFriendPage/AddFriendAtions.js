/**
 * Created by murkrow on 7/15/17.
 */
import {API} from "../../../lib/API";
export const FRIEND_FORM_CHANGE = "friend_form_change";
export const SAVE_FRIEND_SUCCESS = "save_friend_success";
export const SAVE_FRIEND_FAILED = "save_friend_failed";

const api = new API();

export const saveSuccess = (friend) => ({
    type: SAVE_FRIEND_SUCCESS,
    friend
});

export const saveFailed = () => ({
    type: SAVE_FRIEND_FAILED
});

export const onFormChange = (key, value) => ({
    type: FRIEND_FORM_CHANGE,
    key, value
});

export const requestSave = (profile, friend) => (dispatch, getState) =>
    (api.addFriend(profile, friend).then(
        response => {
            dispatch(saveSuccess(response));
        },
        error => {
            dispatch(saveFailed());
        }
    ));