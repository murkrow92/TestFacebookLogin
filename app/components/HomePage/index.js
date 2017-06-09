/**
 * Created by Murkrow on 6/9/2017.
 */

import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";

export default class HomePage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Bầu trời lúc này"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
            </PageWrapper>
        );
    }
}

const rightButton = () => {
    return (<ButtonIcon icon="chart-pie-1" onPress={() => {
    }}/>);
};

