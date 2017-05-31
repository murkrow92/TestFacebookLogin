/**
 * Created by Murkrow on 5/31/2017.
 */

import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBarWithSideBar from "../Commons/TopNavigationBar/TopNavigationBarWithSideBar";
import colors from "../../styles/colors";

export default class ProfilePage extends Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBarWithSideBar
                    title="Cá nhân"
                    rightButton={rightButton}
                    onLeftButtonPress={() => navigate('DrawerOpen')}/>
            </PageWrapper>
        );
    }
}

const rightButton = {
    title: 'Lưu lại' ,
    tintColor: colors.icon
};