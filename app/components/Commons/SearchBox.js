/**
 * Created by murkrow on 6/13/17.
 */


import React, {Component, PropTypes} from "react";
import {View, StyleSheet, TextInput, Platform, Text, TouchableHighlight} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import IOButtonIcon from "./TopNavigationBar/IOButtonIcon";

export default class SearchBox extends Component {
    static propTypes = {
        color: PropTypes.string
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.props.text}
                    underlineColorAndroid='transparent'
                    placeholder='Tìm kiếm'
                    onChangeText={(text) => this.props.onChangeText(text)}
                    style={styles.input}/>
                {this.renderButtonClose(this.props.text)}
            </View>
        );
    }

    renderButtonClose(text) {
        if (text !== '') {
            return (
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={() => this.props.onChangeText('')}>
                    <View style={styles.closeBackground}>
                        <IOButtonIcon
                            color={colors.DARKER_GREY}
                            name="ios-close"
                            onPress={
                                () => this.props.onChangeText('')}
                        />
                    </View>
                </TouchableHighlight>
            );

        }
    }
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: colors.LIST_TOP_BORDER,
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        borderRadius: 5,
        flex: 1,
        color: "#999999",
        fontFamily: fonts.ARIAL,
        fontSize: 13,
        paddingVertical: (Platform.OS === 'ios') ? 7 : 0,
        paddingHorizontal: 7,
        height: 32,
        backgroundColor: colors.LIST_TOP_BORDER

    },
    closeBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        backgroundColor: colors.BORDER_GREY,
        borderRadius: 50

    }
});