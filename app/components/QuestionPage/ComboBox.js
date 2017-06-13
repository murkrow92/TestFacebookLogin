/**
 * Created by murkrow on 6/13/17.
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import Sun from "../../styles/images/planet/Sun.png";
import Aries from "../../styles/images/signs/1.png";

export default class ComboBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comboDegree: '22 ',
            comboName: 'Mặt trời Bạch Dương'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={Sun} style={styles.combo1}/>
                <Image source={Aries} style={styles.combo2}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    combo1: {
        width: 15,
        height: 15,
        marginRight: 5
    },
    combo2: {
        width: 15,
        height: 15
    }
});