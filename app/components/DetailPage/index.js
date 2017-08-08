import React, { Component } from 'react';
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ComboBox from "./ComboBox";
import { Text, View, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { APP_MARGIN } from "../../styles/dimens";
import { QUESTION_TYPE_COMBO, QUESTION_TYPE_QUESTION } from "../../lib/questions";
import QuestionBox from "./QuestionBox";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./DetailActions";

let lodash = require('lodash');

class DetailPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { detail } = this.props;
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        const answer = getAnswer(detail.data);
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Trả lời"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()} />
                <View style={styles.container}>
                    {renderQuestion(params)}
                    <View style={styles.answerBox}>
                        <Text style={styles.answer}>{answer}</Text>
                    </View>
                </View>
            </PageWrapper>
        );
    }

    componentDidMount() {
        const { actions } = this.props;
        const { params } = this.props.navigation.state;
        actions.fetchComboAsync(params.combo);
    }
}

const getAnswer = (data) => {
    let answers = [];
    lodash.forEach(data, function (value, key) {
        answers.push(value);
    });

    if (answers.length > 0) {
        let index = lodash.random(answers.length - 1);
        let item = answers[index];
        return item.content;
    } else {
        return 'Đang cập nhật';
    }


};

const rightButton = () => {
    return {
        title: ''
    };
};

const renderQuestion = (params) => {
    if (params.questionType === QUESTION_TYPE_COMBO) {
        return <ComboBox params={params} />;
    } else if (params.questionType === QUESTION_TYPE_QUESTION) {
        return <QuestionBox />;
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