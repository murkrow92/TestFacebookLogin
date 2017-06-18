/**
 * Created by murkrow on 6/17/17.
 */

export const REQUEST_SAVE = 'request_save';
export const FORM_CHANGE = 'form_change';

export const requestSave = (profile) => ({
    type: REQUEST_SAVE,
    profile
});

export const onFormChange = (key, value) => ({
    type: FORM_CHANGE,
    key, value
});