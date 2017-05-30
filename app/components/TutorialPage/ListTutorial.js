/**
 * Created by Murkrow on 5/24/2017.
 */

import {ListView, View} from "react-native";
import React, {Component, PropTypes} from "react";
import TutorialItem from "./TutorialItem";

export default class ListTutorial extends Component {

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
    return (<TutorialItem data={rowData}/>)
};

const styles = {
    container: {
        marginLeft: 24,
        marginRight: 24
    }
};