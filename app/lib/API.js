/**
 * Created by murkrow on 6/29/17.
 */

const queryString = require("query-string");

const checkStatus = response => {
    console.log(response);
    let json = response.json();
    if (response.status === 200) {
        return json;
    } else {
        return json.then(Promise.reject.bind(Promise));
    }
};

const postRequest = (url, body, headers) =>
    fetch(url, { method: "POST", body, headers }).then(checkStatus);

const getRequest = (url, headers) =>
    fetch(url, { headers }).then(checkStatus);

const putRequest = (url, body, headers) =>
    fetch(url, { method: "PUT", body, headers }).then(checkStatus);

export class API {
    constructor() {
        this.API_ENDPOINT = "http://api.vnastro.com/1.0";
        this.SESSION_TOKEN = "";
    }

    fetchAstro(datetime) {
        let query = queryString.stringify({
            year: datetime.getFullYear(),
            month: datetime.getMonth() + 1,
            day: datetime.getDate(),
            hour: datetime.getHours(),
            minute: datetime.getMinutes()
        });

        return getRequest(`${this.API_ENDPOINT}/astro?${query}`);
    }
}
