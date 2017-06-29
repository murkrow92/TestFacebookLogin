/**
 * Created by Murkrow on 6/9/2017.
 */

import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";
import ListAstroObject from "../Commons/ListAstroObject/index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from './HomeActions';

class HomePage extends Component {

    constructor(props){
        super(props);
        const {actions} = this.props;
        actions.fetchAstroAsync();
    }

    render() {
        let item1 = {content: "23 \xB0 16' 22''", title: 'Mặt trời Bạch Dương', sign: 1, planet: 1, isFirst: true};
        let item2 = {content: "23 \xB0 16' 22''", title: 'Sao Thuỷ Kim Ngưu', sign: 2, planet: 2};
        let item3 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 3, planet: 3};
        let item4 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 3, planet: 12};
        let item5 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 2, planet: 3};
        let item6 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 5, planet: 8};
        let item7 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 7, planet: 3};
        let item8 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 8, planet: 7};
        let item9 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 3, planet: 9};

        let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
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
    return (<ButtonIcon
        icon="chart-pie-1"
        onPress={() => {
        }}/>);
};

const mapStateToProps = (state) => ({
    home: state.home,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

