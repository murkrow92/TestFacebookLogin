/**
 * Created by murkrow on 6/29/17.
 */

import {combineReducers} from "redux";
import {FETCH_ASTRO} from "./HomeActions";

const homeReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ASTRO:
            return {
                ...state,
                ...action.astro.data.Planets
            };
        default:
            return state;
    }
};


export default combineReducers({
    planet: homeReducer
});