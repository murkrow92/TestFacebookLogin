/**
 * Created by murkrow on 7/18/17.
 */


import {API} from "../../lib/API";
export const FETCH_TRANSACTION = "fetch_transaction";
import {AsyncStorage} from "react-native";

const api = new API();

const fetchTransaction = (transaction) => ({
    type: FETCH_TRANSACTION,
    transaction
});

export const fetchTransactionAsync = (userId) => (dispatch, getState) =>
    (api.fetchTransaction(userId).then(
        response => {
            AsyncStorage.setItem('transaction', JSON.stringify(response));
            dispatch(fetchTransaction(response));
        },
        error => {
            AsyncStorage.getItem('transaction').then(
                value => {
                    if (value === null) {
                        return Promise.resolve();
                    }
                    dispatch(fetchTransaction(JSON.parse(value)));

                },
                error => {
                    alert("error: " + error.message);
                }
            );

        }
    ));
