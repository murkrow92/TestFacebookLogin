/**
 * Created by murkrow on 6/13/17.
 */

import React, {Component} from 'react';
import PageWrapper from "../Commons/Wrapper";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ListNotification from "./ListNotification";


export default class NotificationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        let item1 = {
            title: 'Mặt trời Bạch Dương',
            content: '21h ngày 5/10/1992',
            onPress: () => {
                navigate('Detail');
            },
            isFirst: true
        };
        let item2 = {
            title: 'Mặt trời Kim Ngưu liệu có phải là người chung thuỷ hay không',
            content: '21h ngày 5/10/1992',
            onPress: () => {
                navigate('Detail');
            }
        };

        let items = [item1, item2];
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Thông báo"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <ListNotification items={items}/>
            </PageWrapper>
        );
    }
}

const rightButton = () => {
    return {
        title: ''
    };
};
