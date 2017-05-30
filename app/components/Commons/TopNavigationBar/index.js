/**
 * Created by Murkrow on 5/18/2017.
 */

import NavigationBar from 'react-native-navbar';
import {View} from "react-native";
import React, {Component} from "react";
import LineDivider from "../LineDivider";

export default class TopNavigationBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    tintColor='white'
                    title={titleConfig}
                    rightButton={rightButtonConfig}
                />
                <LineDivider/>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
    },
};

const rightButtonConfig = {
    title: 'Save',
    tintColor: 'blue'
};

const titleConfig = {
    title: 'My Profile',
    tintColor: 'black',
    style: {
        fontWeight: 'normal'
    }
};
