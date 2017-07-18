/**
 * Created by murkrow on 7/18/17.
 */

import {combineReducers} from "redux";
import {FETCH_TRANSACTION} from "./BankActions";

const bankReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_TRANSACTION:
            return {
                ...state,
                ...action.transaction
            };
        default:
            return state;
    }
};


export default combineReducers({
    transaction: bankReducer
});