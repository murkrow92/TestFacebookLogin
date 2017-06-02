/**
 * Created by Murkrow on 5/23/2017.
 */

import React, {Component} from "react";
import {View} from "react-native";
import colors from "../../styles/colors";

export default class PageWrapper extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_APP
    }
};