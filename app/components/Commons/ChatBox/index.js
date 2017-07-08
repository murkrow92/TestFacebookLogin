/**
 * Created by Murkrow on 5/27/2017.
 */

import {Text, TouchableHighlight, View, StyleSheet} from "react-native";
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import React, {Component} from "react";
import colors from "../../../styles/colors";

export default class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <AutoGrowingTextInput
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    multiline={true}
                    placeholderTextColor={colors.BORDER_GREY}
                    placeholder="Ask a question ..."
                    style={styles.chatbox}
                    value={this.state.message}
                    onChangeText={(text) => this.setState({
                        message: text
                    })}
                />
                <TouchableHighlight
                    onPress={() => this.props.onPress(this.state.message)}
                    underlayColor="white">
                    <View style={styles.buttonContainer}>
                        <Text style={styles.sendLabel}>Gửi</Text>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        height: 56
    },
    chatbox: {
        flex: 1,
        marginRight: 8,
        justifyContent: 'center',
        color: '#555555',
        paddingRight: 8,
        paddingLeft: 8,
        height: 40,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
    buttonContainer: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: colors.DARKER_GREY
    },
    sendLabel: {
        color: colors.BLACK,
        fontSize: 15
    }
});

