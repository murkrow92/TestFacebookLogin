/**
 * Created by Murkrow on 5/31/2017.
 */

import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBarWithSideBar from "../Commons/TopNavigationBar/TopNavigationBarWithSideBar";

export default class ProfilePage extends Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBarWithSideBar
                    title="Cá nhân"
                    rightButton={{title: 'Lưu lại'}}
                    onLeftButtonPress={() => navigate('DrawerOpen')}/>
            </PageWrapper>
        );
    }
}