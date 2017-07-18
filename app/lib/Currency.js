/**
 * Created by murkrow on 7/18/17.
 */
let currencyFormatter = require('currency-formatter');

export default class Currency {
    static convert(money) {
        return currencyFormatter.format(money, {
            locale: 'vi-VN',
            precision: 0
        });
    }
}