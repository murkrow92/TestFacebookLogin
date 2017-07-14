/**
 * Created by murkrow on 6/13/17.
 */

import {ListView, View} from "react-native";
import React, {Component, PropTypes} from "react";
import FriendItem from "./FriendItem";

export default class ListFriend extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(this.props.items);
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={dataSource}
                    renderRow={(rowData) => renderRow(rowData, this.props.navigate)}
                />
            </View>
        );
    }
}

const renderRow = (rowData, navigate) => {
    return (<FriendItem
        navigate={navigate}
        data={rowData}/>)
};

const styles = {
    container: {}
};