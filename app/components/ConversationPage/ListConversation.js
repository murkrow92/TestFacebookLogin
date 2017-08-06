/**
 * Created by murkrow on 6/13/17.
 */

import {ListView, ScrollView, View} from "react-native";
import React, {Component, PropTypes} from "react";
import ConversationItem from "./ConversationItem";

export default class ListConversation extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.items),
        };
    }

    render() {
        const {navigate, items} = this.props;
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
    return (<ConversationItem
        navigate={navigate}
        data={rowData}/>)
};

const styles = {
    container: {}
};