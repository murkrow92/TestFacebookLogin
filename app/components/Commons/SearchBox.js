/**
 * Created by murkrow on 6/13/17.
 */


import React, {Component, PropTypes} from "react";
import {View, StyleSheet, TextInput, Platform} from "react-native";
import colors from "../../styles/colors";

export default class SearchBox extends Component {
    static propTypes = {
        color: PropTypes.string
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='Tìm kiếm'
                    style={styles.input}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom:10
    },
    input: {
        paddingVertical: (Platform.OS === 'ios') ? 7 : 0,
        paddingHorizontal: 7,
        borderRadius: 5,
        height: 32,
        backgroundColor: colors.LIST_TOP_BORDER

    }
});