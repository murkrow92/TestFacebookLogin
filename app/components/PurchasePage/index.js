/**
 * Created by Murkrow on 5/25/2017.
 */
import TopNavigationBarWithBack from "../Commons/TopNavigationBar/TopNavigationBarWithBack";
import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import ListPurchase from "./ListPurchase";
import {View} from "react-native";

export default class PurchasePage extends Component {

    render() {
        let item1 = {title: "Purchase One Reading", price: '50,000 VND'};
        let item2 = {title: "Purchase Three Reading", price: '100,000 VND'};
        let item3 = {title: "Purchase Three Reading & Weeekly Horoscopes", price: '275,000 VND'};

        let items = [item1, item2, item3];
        return (
            <PageWrapper>
                <TopNavigationBarWithBack title="My Store"/>
                <ListPurchase items={items}/>
            </PageWrapper>
        );
    }
}