import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { List } from 'immutable';

import SettingsHeader from 'main/components/settings-header/settings-header';
import SettingsContent from 'main/components/settings-content/settings-content';

import './settings.scss';

export default class Settings extends React.PureComponent {
    static propTypes = {
        id: PropTypes.number.isRequired,
        setActiveContextField: PropTypes.func.isRequired,
        setActiveDimensionField: PropTypes.func.isRequired,
        setActiveValue: PropTypes.func.isRequired,
        searchValues: PropTypes.func.isRequired,
        changeSearchMode: PropTypes.func.isRequired,
        dimensionsFields: PropTypes.arrayOf(PropTypes.shape([
            PropTypes.string,
            PropTypes.number,
        ])),
        contextsFields: PropTypes.arrayOf(PropTypes.shape([
            PropTypes.string,
            PropTypes.number,
        ])),
        contentValues: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })),
        activeContentValues: PropTypes.instanceOf(List),
    };

    static defaultProps = {
        contextsFields: [],
        contentValues: [],
        dimensionsFields: [],
        activeContentValues: List(),
    }

    render() {
        return (
            <Draggable
                handle=".settings-header__drag"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
                <div className="settings-wrapper">
                    <SettingsHeader onDrag={() => {}} />
                    <SettingsContent
                        id={this.props.id}
                        dimensionFields={this.props.dimensionsFields}
                        contextFields={this.props.contextsFields}
                        contentValues={this.props.contentValues}
                        setActiveContextField={this.props.setActiveContextField}
                        setActiveDimensionField={this.props.setActiveDimensionField}
                        searchValues={this.props.searchValues}
                        setActiveValue={this.props.setActiveValue}
                        activeContentValues={this.props.activeContentValues}
                        changeSearchMode={this.props.changeSearchMode}
                    />
                </div>
            </Draggable>
        );
    }
}
