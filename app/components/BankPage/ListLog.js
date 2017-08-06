/**
 * Created by murkrow on 6/10/17.
 */

import {ListView, ScrollView, View} from "react-native";
import React, {Component, PropTypes} from "react";
import LogItem from "./LogItem";

export default class ListLog extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        let items = this.props.items;
        if (items.length > 0) {
            items[0].isFirst = true;
        }
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(items);
        return (
            <ScrollView style={styles.container}>
                <ListView
                    dataSource={dataSource}
                    renderRow={(rowData) => renderRow(rowData)}
                />
            </ScrollView>
        );
    }
}

const renderRow = (rowData) => {
    return (<LogItem data={rowData}/>)
};

const styles = {
    container: {}
};