/**
 * Created by murkrow on 6/13/17.
 */


import React, {Component, PropTypes} from "react";
import {View, StyleSheet, TextInput, Platform} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

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
                    onChangeText={(text) => this.props.onChangeText(text)}
                    style={styles.input}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        color: "#999999",
        fontFamily: fonts.ARIAL,
        fontSize: 13,
        paddingVertical: (Platform.OS === 'ios') ? 7 : 0,
        paddingHorizontal: 7,
        borderRadius: 5,
        height: 32,
        backgroundColor: colors.LIST_TOP_BORDER

    }
});