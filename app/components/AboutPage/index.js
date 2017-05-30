/**
 * Created by Murkrow on 5/22/2017.
 */
import TopNavigationBarWithBack from "../Commons/TopNavigationBar/TopNavigationBarWithBack";
import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import ListFeedback from "./ListFeedback";
import PageHeader from "../Commons/PageHeader";

export default class AboutPage extends Component {

    render() {
        let item1 = {content: "Good", date: "23/05/2017", star: 5, byUser: 'Duc'};
        let item2 = {content: "Bad", date: "22/05/2017", star: 5, byUser: 'Bao'};
        let item3 = {content: "Bad", date: "22/05/2017", star: 5, byUser: 'Viet Anh'};
        let item4 = {content: "Bad", date: "22/05/2017", star: 5, byUser: 'Yen u'};
        let item5 = {content: "Bad", date: "22/05/2017", star: 5, byUser: 'Test 1'};
        let item6 = {content: "Bad", date: "22/05/2017", star: 5, byUser: 'Test 2'};
        let item7 = {content: "Bad", date: "22/05/2017", star: 5, byUser: 'Test 3'};
        let items = [item1, item2, item3, item4, item5, item6, item7];
        return (
            <PageWrapper>
                <TopNavigationBarWithBack title="Our Astrologers"/>
                <PageHeader title="About Us"/>
                <ListFeedback items={items}/>
            </PageWrapper>
        );
    }
}


