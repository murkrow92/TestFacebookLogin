/**
 * Created by murkrow on 6/10/17.
 */

import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import {View, StyleSheet, Text, Button} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import {APP_MARGIN} from "../../styles/dimens";
import AccountBox from "./AccountBox";

export default class BankPage extends Component {
    render() {
        let item1 = {content: "23 \xB0 16' 22''", title: 'Mặt trời Bạch Dương', sign: 1, planet: 1, isFirst: true};
        let item2 = {content: "23 \xB0 16' 22''", title: 'Sao Thuỷ Kim Ngưu', sign: 2, planet: 2};
        let item3 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 3, planet: 3};
        let item4 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 3, planet: 12};
        let item5 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 2, planet: 3};
        let item6 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 5, planet: 8};
        let item7 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 7, planet: 3};
        let item8 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 8, planet: 7};
        let item9 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 3, planet: 9};

        let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Ngân quỹ"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <AccountBox/>

            </PageWrapper>
        );
    }
}

const rightButton = () => {
    return ({
        title: ''
    });
};

const styles = StyleSheet.create({
});