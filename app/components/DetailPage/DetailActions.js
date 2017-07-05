/**
 * Created by murkrow on 7/5/17.
 */

import {API} from "../../lib/API";
export const FETCH_COMBO = "fetch_combo";

const api = new API();

const fetchCombo = (combo) => ({
    type: FETCH_COMBO,
    combo
});

export const fetchComboAsync = (combo) => (dispatch, getState) =>
    (api.fetchDetailCombo(combo).then(
        response => {
            dispatch(fetchCombo(response));
        },
        error => {
            console.log(error);
        }));