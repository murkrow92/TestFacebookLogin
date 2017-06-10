/**
 * Created by murkrow on 6/10/17.
 */

import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import {StyleSheet} from "react-native";
import AccountBox from "./AccountBox";
import ListLog from "./ListLog";

export default class BankPage extends Component {
    render() {
        let item1 = {content: "23 \xB0 16' 22''", title: 'Mặt trời Bạch Dương', change: -50000, isFirst: true};
        let item2 = {content: "23 \xB0 16' 22''", title: 'Sao Thuỷ Kim Ngưu', change: -50000};
        let item3 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', change: -50000};
        let item4 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', change: 50000};
        let item5 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', change: 100000};
        let item6 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', change: 50000};
        let item7 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', change: -50000};
        let item8 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', change: -50000};
        let item9 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', change: 50000};

        let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Ngân quỹ"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <AccountBox/>
                <ListLog items={items}/>

            </PageWrapper>
        );
    }
}

const rightButton = () => {
    return ({
        title: ''
    });
};

const styles = StyleSheet.create({});