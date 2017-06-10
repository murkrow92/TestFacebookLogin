/**
 * Created by Murkrow on 5/23/2017.
 */

import {Text, View} from "react-native";
import React, {Component, PropTypes} from "react";
import colors from "../../styles/colors";
export default class FeedBackItem extends Component {

    static propTypes = {
        feedback: PropTypes.object.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.star}>Hello World</Text>
                    <View style={styles.datetimeContainer}>
                        <Text style={styles.datetimeText}>{this.props.feedback.date} by {this.props.feedback.byUser}</Text>
                    </View>
                </View>
                <Text style={styles.contentContainer}>{this.props.feedback.contentContainer}</Text>
            </View>);
    }
}

const styles = {
    container: {
        marginTop: 8,
        marginBottom: 8,
        flex: 1,
        flexDirection: 'column'
    },
    header: { flexDirection: 'row'},
    datetimeContainer: {
        flex:0.75,
        flexDirection:'row',
    },
    datetimeText: {
        color: colors.TEXT_GREY
    },
    star: {
        flex:0.5,
        flexDirection:'row'
    },
    contentContainer: {
        color: 'black'
    }
};


