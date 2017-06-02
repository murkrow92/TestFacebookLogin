/**
 * Created by Murkrow on 5/27/2017.
 */

import {Text, TextInput, TouchableHighlight, View, Dimensions} from "react-native";
import React, {Component} from "react";
import LineDivider from "../LineDivider";
import colors from "../../../styles/colors";
var windowSize = Dimensions.get('window');

export default class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <LineDivider/>
                    <View style={styles.textContainer}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            multiline={true}
                            placeholderTextColor={colors.BORDER_GREY}
                            placeholder="Ask a question ..."
                            style={styles.input}
                            value={this.state.message}
                            onChangeText={(text) => this.setState({message: text})}
                        />
                    </View>
                    <View style={styles.sendContainer}>
                        <TouchableHighlight
                            underlayColor="white">
                            <Text style={styles.sendLabel}>SEND</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    box: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.TOOLBAR,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    sendContainer: {
        marginLeft: 8,
        justifyContent: 'flex-end',
        paddingRight: 10
    },
    sendLabel: {
        color: 'silver',
        fontSize: 15
    },
    input: {
        justifyContent:'center',
        width: windowSize.width - 70,
        color: '#555555',
        paddingRight: 8,
        paddingLeft: 8,
        height: 32,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 3,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
};

