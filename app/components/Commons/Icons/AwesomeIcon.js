/**
 * Created by murkrow on 6/28/17.
 */

import React, {Component, PropTypes} from 'react';
import colors from "../../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import {ICON_SIZE} from "../../../styles/dimens";

export default class AwesomeIcon extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        size: PropTypes.number,
        color: PropTypes.string
    };

    render() {
        const size = this.props.size ? this.props.size : ICON_SIZE;
        const color = this.props.color ? this.props.color : colors.BLUE;
        return (
            <Icon
                name={this.props.name}
                size={size}
                color={color}/>);
    }
}
