/**
 * Created by Murkrow on 5/27/2017.
 */


import {ListView, View} from "react-native";
import React, {Component, PropTypes} from "react";
import MessageItem from "./MessageItem";

export default class ListMessage extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {items, profile, facebook} = this.props;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(items);
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={dataSource}
                    renderRow={(rowData) => renderRow(rowData, profile, facebook)}
                />
            </View>
        );
    }
}

const renderRow = (rowData, profile, facebook) => {
    return <MessageItem
        facebook={facebook}
        profile={profile}
        data={rowData}/>;
};

const styles = {
    container: {
        marginLeft: 8,
        marginRight: 8
    }
};