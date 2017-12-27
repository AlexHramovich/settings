import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ListItem from 'main/components/list-item/list-item';

import './settings-filter.scss';

export default class SettingsFilter extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape([
            PropTypes.string,
            PropTypes.number,
        ])),
        caption: PropTypes.string.isRequired,
        onHandleClick: PropTypes.func.isRequired,
    };

    static defaultProps = {
        items: null,
    };

    state = {
        isDropdownOpen: false,
        checkedItems: [],
    };

    getContent = () =>
        this.props.items.map(item => (
            <ListItem
                key={item.id}
                id={item.id}
                handleClick={this.props.onHandleClick}
                value={item.name}
            />
        ));

    getCheckedItems = () =>
        this.state.checkedItems.map(item =>
            <span key={item.id} className="settings-filter__active-field">{item.name}</span>)

    changeDropdownVisibility = () => {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen,
        });
    };

    render() {
        const dropdownClasses = classNames('settings-filter__dropdown-list', {
            'settings-filter__dropdown-list_hidden':
                !this.state.isDropdownOpen,
        });

        return (
            <div className="settings-filter">
                <div className="settings-filter__header">
                    <div
                        className="settings-filter__dropdown "
                        onClick={this.changeDropdownVisibility}
                    >
                        <i className="material-icons">clear_all</i>
                    </div>
                    <div className="settings-filter__caption">{this.props.caption}</div>
                    <div className="settings-filter__active-fields">{this.getCheckedItems()}</div>
                </div>
                <ul className={dropdownClasses}>
                    {this.props.items && this.getContent()}
                </ul>
            </div>
        );
    }
}
