import React, {Component, PropTypes} from "react";
import {Text, View} from "react-native";

export default class ConversationItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        return (<View>
            <Text>Hello World</Text>
        </View>);
    }
}