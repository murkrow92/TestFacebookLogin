/**
 * Created by murkrow on 7/1/17.
 */


import {combineReducers} from "redux";
import {GET_PROFILE_FROM_LOCAL} from "./SideBarAction";

const sidebarReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PROFILE_FROM_LOCAL:
            return {
                ...state,
                ...action.profile
            };
        default:
            return state;
    }
};

export default combineReducers({
    user: sidebarReducer
});