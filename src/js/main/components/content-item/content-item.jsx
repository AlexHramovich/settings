import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './content-item.scss';

export default class ContentItem extends React.PureComponent {
    static propTypes = {
        id: PropTypes.number.isRequired,
        onHandleClick: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
    };

    onHandleClick = () => {
        this.props.onHandleClick(this.props.id);
    };

    render() {
        const classes = classNames('content-item', {
            'content-item_selected': this.props.isSelected,
        });

        return (
            <li onClick={this.onHandleClick} className={classes}>
                {this.props.value}
            </li>
        );
    }
}
