/**
 * Created by murkrow on 7/15/17.
 */
export const SAVE_NEW_FRIEND = "save_new_friend";
export const FRIEND_FORM_CHANGE = "friend_form_change";

export const requestSave = (friend) => (dispatch, getState) => ({
    type: SAVE_NEW_FRIEND,
    friend
});

export const onFormChange = (key, value) => ({
    type: FRIEND_FORM_CHANGE,
    key, value
});