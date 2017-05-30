/**
 * Created by Murkrow on 5/23/2017.
 */


import TopNavigationBarWithBack from "../Commons/TopNavigationBar/TopNavigationBarWithBack";
import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import PageHeader from "../Commons/PageHeader";
import ListTutorial from "./ListTutorial";

export default class TutorialPage extends Component {
    render() {
        let item1 = {content: "Fill in your birth data", icon: 'youtube', rowIndex: 1};
        let item2 = {content: "Ask your Astrologer", icon: 'download', rowIndex: 2};
        let item3 = {content: "Receive your answer", icon: 'rocket', rowIndex: 3};

        let items = [item1, item2, item3];

        return (
            <PageWrapper>
                <TopNavigationBarWithBack title="Our Astrologers"/>
                <PageHeader title="How to use"/>
                <ListTutorial items={items}/>
            </PageWrapper>
        );
    }
}

