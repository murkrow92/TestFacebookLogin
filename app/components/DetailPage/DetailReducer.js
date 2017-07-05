/**
 * Created by murkrow on 7/5/17.
 */

import {FETCH_COMBO} from "./DetailActions";
import {combineReducers} from "redux";

const detailReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_COMBO:
            return {
                ...state,
                ...action.combo.data
            };
        default:
            return state;
    }
};

export default combineReducers({
    data: detailReducer
});