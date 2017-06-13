/**
 * Created by murkrow on 6/13/17.
 */
import React, {Component} from 'react';
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import {View, StyleSheet} from "react-native";
import {APP_MARGIN} from "../../styles/dimens";
import SearchBox from "../Commons/SearchBox";


export default class QuestionPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Câu hỏi"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <View style={styles.container}>
                    <SearchBox/>
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
        marginLeft: APP_MARGIN,
        marginRight: APP_MARGIN

    }
});