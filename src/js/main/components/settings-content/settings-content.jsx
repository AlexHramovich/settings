import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import SettingsFilter from 'main/components/settings-filter/settings-filter';
import SettingsSeach from 'main/components/settings-search/settings-search';
import ListItem from 'main/components/list-item/list-item';

import './settings-content.scss';

export default class SettingsContent extends React.PureComponent {
    static propTypes = {
        id: PropTypes.number.isRequired,
        dimensionFields: PropTypes.arrayOf(PropTypes.shape([
            PropTypes.string,
            PropTypes.number,
        ])).isRequired,
        contextFields: PropTypes.arrayOf(PropTypes.shape([
            PropTypes.string,
            PropTypes.number,
        ])).isRequired,
        contentValues: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })).isRequired,
        setActiveValue: PropTypes.func.isRequired,
        setActiveContextField: PropTypes.func.isRequired,
        setActiveDimensionField: PropTypes.func.isRequired,
        searchValues: PropTypes.func.isRequired,
        activeContentValues: PropTypes.instanceOf(List).isRequired,
    };

    getContentValues = () =>
        this.props.contentValues.map(value => (
            <ListItem
                checked={this.props.activeContentValues.includes(value.id)}
                key={value.id}
                id={value.id}
                handleClick={this.setActiveValue}
                value={value.name}
            />
        ));

    setActiveValue = (valuesArr) => {
        this.props.setActiveValue(this.props.id, valuesArr);
    }

    search = (searchStr) => {
        this.props.searchValues(this.props.id, searchStr);
    }

    contextItemHandleClick = (fieldId) => {
        this.props.setActiveContextField(this.props.id, fieldId);
    };

    dimensionsItemHandleClick = (fieldId) => {
        this.props.setActiveDimensionField(this.props.id, fieldId);
    };

    render() {

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

                        <SettingsSeach onSearch={this.search} />
                    </div>
                    <ul>
                        {this.getContentValues()}
                    </ul>
                </div>
            </div>
        );
    }
}
