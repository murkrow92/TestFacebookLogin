/**
 * Created by murkrow on 7/15/17.
 */
import {API} from "../../../lib/API";
export const FRIEND_FORM_CHANGE = "friend_form_change";
export const SAVE_FRIEND_SUCCESS = "save_friend_success";
export const SAVE_FRIEND_FAILED = "save_friend_failed";
export const RESET_FRIEND_STATE = "reset_friend_state";

const api = new API();

export const saveSuccess = () => ({
    type: SAVE_FRIEND_SUCCESS,
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
            if (response.done === 1) {
                dispatch(saveSuccess());
            } else {
                dispatch(saveFailed());
            }
        },
        error => {
            dispatch(saveFailed());
        }
    ));

export const resetState = () => ({
    type: RESET_FRIEND_STATE
});