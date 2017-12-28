import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import classNames from 'classnames';

import SettingsFilter from 'main/components/settings-filter/settings-filter';
import SettingsSearch from 'main/components/settings-search/settings-search';
import ContentItem from 'main/components/content-item/content-item';

import './settings-content.scss';

export default class SettingsContent extends React.PureComponent {
    static propTypes = {
        id: PropTypes.number.isRequired,
        dimensionFields: PropTypes.arrayOf(PropTypes.shape([PropTypes.string, PropTypes.number]))
            .isRequired,
        contextFields: PropTypes.arrayOf(PropTypes.shape([PropTypes.string, PropTypes.number]))
            .isRequired,
        contentValues: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })).isRequired,
        setActiveValue: PropTypes.func.isRequired,
        setActiveContextField: PropTypes.func.isRequired,
        setActiveDimensionField: PropTypes.func.isRequired,
        searchValues: PropTypes.func.isRequired,
        activeContentValues: PropTypes.instanceOf(List).isRequired,
        changeSearchMode: PropTypes.func.isRequired,
    };

    state = {
        isDropDownOpen: false,
    };

    getContentValues = () =>
        this.props.contentValues.map(value => (
            <ContentItem
                isSelected={this.props.activeContentValues.includes(value.id)}
                key={value.id}
                id={value.id}
                onHandleClick={this.setActiveValue}
                value={value.name}
            />
        ));

    setActiveValue = (valuesArr) => {
        this.props.setActiveValue(this.props.id, valuesArr);
    };

    search = (searchStr) => {
        this.props.searchValues(this.props.id, searchStr, this.state.searchType);
    };

    changeSearchMode = () => {
        this.props.changeSearchMode(this.props.id);
    };

    contextItemHandleClick = (fieldId) => {
        this.props.setActiveContextField(this.props.id, fieldId);
    };

    dimensionsItemHandleClick = (fieldId) => {
        this.props.setActiveDimensionField(this.props.id, fieldId);
    };

    render() {
        const classes = classNames('settings-content__values', {
            'settings-content__values_dismiss-events': this.state.isDropDownOpen,
        });

        return (
            <div className="settings-content">
                <div className="settings-content__left-border" />
                <div className="settings-content__content">
                    <div className="settings-content__filters">
                        <SettingsFilter
                            items={this.props.contextFields}
                            caption="CONTEXT"
                            onHandleClick={this.contextItemHandleClick}
                        />
                        <SettingsFilter
                            items={this.props.dimensionFields}
                            caption="DIMENSIONS"
                            onHandleClick={this.dimensionsItemHandleClick}
                        />
                        <SettingsSearch
                            onSearch={this.search}
                            onChangeSearchMode={this.changeSearchMode}
                        />
                    </div>
                    <ul className={classes}>{this.getContentValues()}</ul>
                </div>
            </div>
        );
    }
}
