import React, {Component} from 'react';
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ComboBox from "./ComboBox";
import {Text, View, StyleSheet} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import QuestionBox from "./QuestionBox";

export default class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    <ComboBox/>
                    <QuestionBox/>
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
    container:{
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'column'
    },
    answerBox: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        backgroundColor: colors.LIST_TOP_BORDER

    },
    answer: {
        padding: 6,
        color: colors.BLACK,
        fontSize: 13,
        fontFamily: fonts.ARIAL
    }
});