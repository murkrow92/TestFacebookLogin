import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UserInputForm from './UserInputForm';

GLOBAL = require('../../../../Global');
IMAGES = {
    icon: require('../../../styles/images/ic_sagittarius.png')
};

export default class UserInput extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={IMAGES.icon}/>
                    <Text style={styles.title}> Dùng để tính tử khí nhé </Text>
                </View>
                <UserInputForm/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'LIGHT_BLUE'
    },
    logoContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    logo: {},
    title: {
        width: 160,
        marginTop: 8,
        opacity: 0.8,
        color: 'grey',
        textAlign: 'center'
    }
});


