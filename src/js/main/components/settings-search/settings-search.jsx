import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import './settings-search.scss';

export default class SettingsSearch extends React.PureComponent {
    static propTypes = {
        onSearch: PropTypes.func,
    };

    static defaultProps = {
        onSearch: () => {},
    };

    componentDidMount() {
        this.textField.input.addEventListener('keydown', this.onEnter);
    }

    componentWillUnmount() {
        this.textField.input.removeEventListener('keydown', this.onEnter);
    }

    onEnter = (e) => {
        e.stopPropagation();
        if (e.keyCode === 13) {
            this.props.onSearch(e.target.value);
        }
    };

    render() {
        return (
            <div className="settings-search">
                <div className="settings-search__icon"><i className="material-icons">search</i></div>
                <TextField
                    ref={(input) => { this.textField = input; }}
                    fullWidth
                    hintText="Search..."
                    underlineFocusStyle={{
                    borderWidth: '1px',
                    }}
                />
            </div>
        );
    }
}
