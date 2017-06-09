/**
 * Created by Murkrow on 6/9/2017.
 */


import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text} from "react-native";


export default class NormalTitle extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        return (<Text style={styles.title}>{this.props.title}</Text>);

    }
}

const styles = StyleSheet.create({
        title: {
            fontWeight: 'normal',
            fontSize: 13
        }
    }
);
