import React from 'react';
import PropTypes from 'prop-types';

import SettingsContainer from 'main/containers/settings-container';

import './main.scss';

export default class Main extends React.PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        fetchTables: PropTypes.func.isRequired,
        initDefaultSettingsState: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.initDefaultSettingsState(1);
        this.props.initDefaultSettingsState(2);
        this.props.initDefaultSettingsState(3);
        this.props.initDefaultSettingsState(4);
        this.props.initDefaultSettingsState(5);
        this.props.initDefaultSettingsState(6);
        this.props.fetchTables();
    }

    render() {
        return (
            <div className="main-wrapper">
                {this.props.isLoading ? (
                    <span>Loading...</span>
                ) : (
                    <div className="settings">
                        <div className="main">
                            <SettingsContainer id={1} />
                        </div>
                        <div className="main">
                            <SettingsContainer id={2} />
                        </div>
                        <div className="main">
                            <SettingsContainer id={3} />
                        </div>
                        <div className="main">
                            <SettingsContainer id={4} />
                        </div>
                        <div className="main">
                            <SettingsContainer id={5} />
                        </div>
                        <div className="main">
                            <SettingsContainer id={6} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
