import React, {Component} from 'react';
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ComboBox from "./ComboBox";
import {Text, View, StyleSheet} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import {APP_MARGIN} from "../../styles/dimens";
import {QUESTION_TYPE_COMBO, QUESTION_TYPE_QUESTION} from "../../lib/questions";
import Icon from "../Commons/Icons/Icon";
import QuestionBox from "./QuestionBox";



export default class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question:'Làm thế nào để biết cung Mọc?',
            questionType:QUESTION_TYPE_QUESTION,
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
                    {renderQuestion(this.state.questionType)}
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

const renderQuestion = (type) => {
    if (type === QUESTION_TYPE_COMBO){
        return <ComboBox/>;
    }  else if (type === QUESTION_TYPE_QUESTION) {
        return <QuestionBox/>;
    }

};

const styles = StyleSheet.create({
    container:{
        marginLeft: APP_MARGIN,
        marginRight: APP_MARGIN,
        flex: 1,
        flexDirection: 'column'
    },
    answerBox: {
        marginTop: 15,
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