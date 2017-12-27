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
        this.props.initDefaultSettingsState(8);
        this.props.initDefaultSettingsState(9);
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
                            <SettingsContainer id={8} />
                            <SettingsContainer id={9} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
