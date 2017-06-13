/**
 * Created by murkrow on 6/13/17.
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import AccountBox from "./AccountBox";
import DrawerItem from "./DrawerItem";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {navigate} = this.props.content.navigation;
        let content = this.props.content;
        return ( <View style={styles.container}>
            <AccountBox navigate={navigate}/>
            <DrawerItem
                title = "Ngân quỹ"
            />
            <DrawerItem
                title = "Tạo câu hỏi"
            />
        </View> );


    }
}

const styles = StyleSheet.create({
    container: {},

});
