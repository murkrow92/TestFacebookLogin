import React, {Component} from 'react';
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import {View, StyleSheet, Text, Image} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Sun from "../../styles/images/planet/Sun.png";
import Aries from "../../styles/images/signs/1.png";

export default class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comboDegree:'22 ',
            comboName:'Mặt trời Bạch Dương',
            answer: 'Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.'
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Trả lời"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <View style={styles.container}>
                    <View style={styles.comboBox}>
                        <Image source={Sun} style={styles.combo1}/>
                        <Image source={Aries} style={styles.combo2}/>
                    </View>
                    <Text style={styles.comboName}>{this.state.comboName}</Text>
                    <Text style={styles.comboDegree}>{this.state.comboDegree}</Text>
                    <View style={styles.answerBox}>
                        <Text style={styles.answer}>{this.state.answer}</Text>
                    </View>
                </View>
            </PageWrapper>
        );
    }
}

const rightButton = () => {
    return {
        title: ''
    };
};

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex: 1,
        flexDirection: 'column'
    },
    comboBox: {
        marginTop:15,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    combo1: {
        width: 50,
        height: 50,
        marginRight:15
    },
    combo2: {
        width: 50,
        height: 50
    },
    comboName:{
        marginTop:10,
        color: colors.BLACK,
        fontSize: 13,
        fontFamily: fonts.OPEN_SAN

    },
    comboDegree:{
        marginTop:10,
        color: colors.LABEL,
        fontSize: 13,
        fontFamily: fonts.OPEN_SAN
    },
    answerBox: {
        marginTop:10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        backgroundColor: colors.LIST_TOP_BORDER,
        marginLeft: 10,
        marginRight: 10
    },
    answer: {
        padding:6,
        color: colors.BLACK,
        fontSize: 13,
        fontFamily: fonts.ARIAL
    }
});