/**
 * Created by murkrow on 7/12/17.
 */

import {combineReducers} from "redux";
import {FETCH_ASTRO_DATE} from "./AstroActions";

const astroReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ASTRO_DATE:
            return {
                ...state,
                ...action.astro.data.Planets
            };
        default:
            return state;
    }
};


export default combineReducers({
    planet: astroReducer
});