/**
 * Created by murkrow on 7/12/17.
 */
import {API} from "../../lib/API";
export const FETCH_ASTRO_DATE = "fetch_astro_date";

const api = new API();

const fetchAstro = (astro) => ({
    type: FETCH_ASTRO_DATE,
    astro
});


export const fetchAstroAtDateAsync = (date) => (dispatch, getState) =>
    (api.fetchAstro(date).then(
        response => {
            dispatch(fetchAstro(response));
        },
        error => {
            alert("error: " + error.message);

        }
    ));
