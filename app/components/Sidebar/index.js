/**
 * Created by murkrow on 6/13/17.
 */

import React, {Component} from 'react';
import {View, StyleSheet} from "react-native";
import AccountBox from "./AccountBox";
import DrawerItem from "./DrawerItem";
import DrawerTitle from "./DrawerTitle";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.content.navigation;
        return ( <View style={styles.container}>
            <AccountBox
                navigate={navigate}/>
            <DrawerItem
                navigate={navigate}
                account="500.000 đ"
                title="Ngân quỹ"
            />
            <DrawerItem
                navigate={navigate}
                button="plus-circled"
                title="Tạo câu hỏi"
            />
            <DrawerTitle
                title="Bản đồ sao"
            />
            <DrawerItem
                title="Của tôi"
            />
            <DrawerItem
                title="Của bạn bè"
            />
        </View> );


    }
}

const styles = StyleSheet.create({
    container: {}
});
