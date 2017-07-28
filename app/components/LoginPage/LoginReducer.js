import {combineReducers} from "redux";
import {ACTION_FETCH_FACEBOOK_SUCCESS, ACTION_LOGIN_SUCCESS} from "./LoginActions";

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_FETCH_FACEBOOK_SUCCESS:
            return {
                ...state,
                ...action.facebook,
                isFacebookLoggedIn: true,
                isLoggedIn: false
            };
        case ACTION_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.response.access_token,
                isLoggedIn: true,
            };
        default:
            return state;
    }
};

export default combineReducers({
    data: loginReducer
});