import React, {Component} from 'react';
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ComboBox from "./ComboBox";
import {Text, View, StyleSheet} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import {APP_MARGIN} from "../../styles/dimens";
import {QUESTION_TYPE_COMBO, QUESTION_TYPE_QUESTION} from "../../lib/questions";
import QuestionBox from "./QuestionBox";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "./DetailActions";


class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'Làm thế nào để biết cung Mọc?',
            answer: 'Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.Hello World. Sun is the most important planet on a chart.'
        };
        const {actions} = this.props;
        const {params} = this.props.navigation.state;
        actions.fetchComboAsync(params.combo);
    }

    render() {
        const {detail} = this.props;
        console.log(detail.data);
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Trả lời"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <View style={styles.container}>
                    {renderQuestion(params)}
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

const renderQuestion = (params) => {
    if (params.questionType === QUESTION_TYPE_COMBO) {
        return <ComboBox params={params}/>;
    } else if (params.questionType === QUESTION_TYPE_QUESTION) {
        return <QuestionBox/>;
    }

};

const styles = StyleSheet.create({
    container: {
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


const mapStateToProps = (state) => ({
    detail: state.detail
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);