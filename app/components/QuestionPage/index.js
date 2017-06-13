/**
 * Created by murkrow on 6/13/17.
 */
import React, {Component} from 'react';
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import {View, StyleSheet} from "react-native";
import SearchBox from "../Commons/SearchBox";
import ListQuestion from "./ListQuestion";
import {QUESTION_TYPE_COMBO, QUESTION_TYPE_QUESTION} from "../../lib/questions";
import {APP_MARGIN} from "../../styles/dimens";


export default class QuestionPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        let item1 = {
            type: QUESTION_TYPE_COMBO,
            title: 'Mặt trời Bạch Dương',
            content:'21h ngày 5/10/1992',
            onPress:() => {
                navigate('Detail');
            }
        };
        let item2 = {
            type: QUESTION_TYPE_QUESTION,
            title: 'Mặt trời Kim Ngưu liệu có phải là người chung thuỷ hay không',
            content:'21h ngày 5/10/1992',
            onPress:() => {
                navigate('Detail');
            }
        };

        let items = [item1, item2];
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Câu hỏi"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <View style={styles.searchBoxContainer}>
                    <SearchBox/>
                </View>
                <ListQuestion items={items}/>

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
    searchBoxContainer: {
        marginLeft: APP_MARGIN,
        marginRight: APP_MARGIN
    }
});