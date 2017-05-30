/**
 * Created by Murkrow on 5/23/2017.
 */

import {ListView, View} from "react-native";
import React, {Component, PropTypes} from "react";
import FeedBackItem from "./FeedBackItem";

export default class ListFeedback extends Component {

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
    return (<FeedBackItem feedback={rowData}/>)
};

const styles = {
    container: {
        marginLeft: 24,
        marginRight: 24
    }
};