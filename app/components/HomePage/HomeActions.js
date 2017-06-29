/**
 * Created by murkrow on 6/29/17.
 */

import {API} from "../../lib/API";
export const FETCH_ASTRO = "fetch_astro";
import {AsyncStorage} from "react-native";

const api = new API();


const fetchAstro = (astro) => ({
    type: FETCH_ASTRO,
    astro
});

export const fetchAstroAsync = () => (dispatch, getState) => {
    let date = new Date();
    return api.fetchAstro(date).then(
        response => {
            AsyncStorage.setItem('current_planet_location', result);
            dispatch(fetchAstro(response));
        }
    );

};