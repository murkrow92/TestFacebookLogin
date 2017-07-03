/**
 * Created by murkrow on 7/3/17.
 */


import {combineReducers} from "redux";
import {FETCH_NOTIFICATIONS} from "./NotificationActions";

const notificationReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS:
            return {
                ...state,
                ...action.notifications.data
            };
        default:
            return state;
    }
};


export default combineReducers({
    list: notificationReducer
});