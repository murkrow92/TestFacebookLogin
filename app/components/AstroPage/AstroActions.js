/**
 * Created by murkrow on 7/12/17.
 */
import {API} from "../../lib/API";
export const FETCH_ASTRO = "fetch_astro";
import {AsyncStorage} from "react-native";

const api = new API();

const fetchAstro = (astro) => ({
    type: FETCH_ASTRO,
    astro
});


export const fetchAstroAtDateAsync = (date) => (dispatch, getState) =>
    (
        AsyncStorage.getItem('astro_position' + date.getTime()).then(
            value => {
                if (value === null) {
                    return api.fetchAstro(date).then(
                        response => {
                            console.log(response);
                            AsyncStorage.setItem('astro_position' + date.getTime(), JSON.stringify(response));
                            dispatch(fetchAstro(response));
                        },
                        error => {
                            alert("error: " + error.message);
                        });
                }
                dispatch(fetchAstro(JSON.parse(value)));
            },
            error => {
                alert("error: " + error.message);
            }
        ));