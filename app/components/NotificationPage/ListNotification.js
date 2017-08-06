/**
 * Created by murkrow on 6/13/17.
 */

import {ListView, ScrollView, View} from "react-native";
import React, {Component, PropTypes} from "react";
import NotificationItem from "./NotificationItem";

export default class ListNotification extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {items, navigate} = this.props;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(items);

        return (
            <ScrollView style={styles.container}>
                <ListView
                    dataSource={dataSource}
                    renderRow={(rowData) => renderRow(rowData, navigate)}
                />
            </ScrollView>
        );
    }
}

const renderRow = (rowData, navigate) => {
    return (<NotificationItem
        navigate={navigate}
        data={rowData}/>)
};

const styles = {
    container: {}
};