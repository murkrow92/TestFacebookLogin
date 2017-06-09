/**
 * Created by Murkrow on 6/9/2017.
 */

import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";
import ListAstroObject from "../Commons/ListAstroObject/index";

export default class HomePage extends Component {
    render() {
        let item1 = {content: "Fill in your birth data", icon: 'youtube', rowIndex: 1};
        let item2 = {content: "Ask your Astrologer", icon: 'download', rowIndex: 2};
        let item3 = {content: "Receive your answer", icon: 'rocket', rowIndex: 3};

        let items = [item1, item2, item3];
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Bầu trời lúc này"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <ListAstroObject items={items}/>
            </PageWrapper>
        );
    }
}

const rightButton = () => {
    return (<ButtonIcon icon="chart-pie-1" onPress={() => {
    }}/>);
};

