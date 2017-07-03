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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.items),
        };
    }

    render() {

        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => renderRow(rowData, this.props.profile)}
                />
            </View>
        );
    }
}

const renderRow = (rowData, profile) => {
    return <MessageItem
        profile={profile}
        data={rowData}/>;
};

const styles = {
    container: {
        marginLeft: 8,
        marginRight: 8
    }
};