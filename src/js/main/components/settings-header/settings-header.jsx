import React from 'react';
import PropTypes from 'prop-types';

import './settings-header.scss';

export default class SettingsHeader extends React.PureComponent {
    static propTypes = {
        onDrag: PropTypes.func,
    };

    static defaultProps = {
        onDrag: () => {},
    };

    render() {
        return (
            <div className="settings-header">
                <div className="settings-header__drag" onClick={this.props.onDrag}><i className="material-icons">open_with</i></div>
                <div className="settings-header__caption">SETTINGS</div>
                <div className="settings-header__close-icon" />
            </div>
        );
    }
}
