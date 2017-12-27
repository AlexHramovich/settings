import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

import './list-item.scss';

export default class ListItem extends React.PureComponent {
    static propTypes = {
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        handleClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        this.props.handleClick(this.props.id);
    };

    render() {
        return (
            <li>
                <span >
                    <Checkbox label={this.props.value} onCheck={this.onClick} style={{color: 'red'}} />
                </span>
            </li>
        );
    }
}
