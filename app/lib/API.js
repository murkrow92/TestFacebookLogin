/**
 * Created by murkrow on 6/29/17.
 */

const queryString = require("query-string");
const lodash = require("lodash");

const RESPONSE_CODE_SUCCESS = 200;
const API_ENDPOINT = "http://api.vnastro.com/1.0";

const checkStatus = response => {
    let json = response.json();
    if (response.status === RESPONSE_CODE_SUCCESS) {
        return json;
    } else {
        console.log(response);
        return json.then(Promise.reject.bind(Promise));
    }
};

const postRequest = (url, body, headers) =>
    fetch(url, { method: "POST", body, headers })
        .then(checkStatus)
        .catch(error => console.log(error));

const getRequest = (url, headers) => fetch(url, { headers }).then(checkStatus);

const putRequest = (url, body, headers) =>
    fetch(url, { method: "PUT", body, headers }).then(checkStatus);

export class API {
    static ACCESS_TOKEN = "";

    static header() {
        return new Headers({
            Authorization: API.ACCESS_TOKEN
        });
    }

    constructor() {
        this.API_ENDPOINT = API_ENDPOINT;
    }

    fetchAstro(datetime) {
        let query = queryString.stringify({
            year: datetime.getFullYear(),
            month: datetime.getMonth() + 1,
            day: datetime.getDate(),
            hour: datetime.getHours(),
            minute: datetime.getMinutes()
        });

        return getRequest(`${this.API_ENDPOINT}/astro?${query}`, API.header());
    }

    fetchNotifications() {
        return getRequest(`${this.API_ENDPOINT}/notify`, API.header());
    }

    fetchConversations() {
        let url = `${this.API_ENDPOINT}/conversation`;
        return getRequest(url, API.header());
    }

    fetchConversation(conversationId) {
        if (conversationId === "0") {
            conversationId = 1;
        }
        let query = queryString.stringify({
            id: conversationId
        });
        let url = `${this.API_ENDPOINT}/conversation?${query}`;
        return getRequest(url, API.header());
    }

    fetchDetailCombo(combo) {
        const body = new FormData();
        lodash.forEach(combo, function(value, key) {
            body.append(key, value);
        });

        let url = `${this.API_ENDPOINT}/astro/mean`;
        return postRequest(url, body, API.header());
    }

    fetchFriend() {
        return getRequest(`${this.API_ENDPOINT}/contact`, API.header());
    }

    addFriend(profile, friend) {
        const body = new FormData();
        lodash.forEach(friend, function(value, key) {
            body.append(key, value);
        });
        body.append("user_id", profile.id);
        let url = `${this.API_ENDPOINT}/contact/add`;
        return postRequest(url, body, API.header());
    }

    fetchTransaction(userId) {
        userId = 2;
        let query = queryString.stringify({
            user_id: userId,
            status: 1
        });
        let url = `${this.API_ENDPOINT}/transaction?${query}`;
        return getRequest(url, API.header());
    }

    saveProfile(profile) {
        const body = new FormData();
        const keys = [
            "id",
            "email",
            "day",
            "month",
            "hour",
            "minute",
            "phone",
            "year"
        ];
        lodash.forEach(keys, function(value, key) {
            if (value === "id") {
                value = "user_id";
            }
            if (profile.hasOwnProperty(value)) {
                body.append(value, profile[value]);
            }
        });
        const url = `${this.API_ENDPOINT}/user/update`;
        return postRequest(url, body, API.header());
    }

    login(email, facebookId) {
        const body = new FormData();
        body.append("email", email);
        body.append("fb_id", facebookId);
        let url = `${this.API_ENDPOINT}/user/fbconnect`;
        return postRequest(url, body);
    }

    fetchUserProfile() {
        const url = `${this.API_ENDPOINT}/user`;
        return getRequest(url, API.header());
    }

    addConversation(message) {
        const url = `${this.API_ENDPOINT}/conversation/add`;
        const body = new FormData();
        body.append("message", message);
        return postRequest(url, body, API.header());
    }

    addMessage(conversationId, message) {
        const url = `${this.API_ENDPOINT}/conversation/addMessage`;
        const body = new FormData();
        body.append("conversation_id", conversationId);
        body.append("message", message);
        return postRequest(url, body, API.header());
    }
}
