/**
 * Created by murkrow on 6/10/17.
 */

import {ListView, View} from "react-native";
import React, {Component, PropTypes} from "react";
import LogItem from "./LogItem";

export default class ListLog extends Component {

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
                    renderRow={(rowData) => renderRow(rowData)}
                />
            </View>
        );
    }
}

const renderRow = (rowData) => {
    return (<LogItem data={rowData}/>)
};

const styles = {
    container: {

    }
};