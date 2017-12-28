import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import Toggle from 'material-ui/Toggle';

import './settings-search.scss';

const styles = {
    block: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        borderBottom: '2px solid white',
    },
    radioButton: {
        marginBottom: 16,
        maxWidth: 100,
    },
    toggle: {
        width: 130,
        marginLeft: 20,
    },
};

export default class SettingsSearch extends React.PureComponent {
    static propTypes = {
        onSearch: PropTypes.func,
        onChangeSearchMode: PropTypes.func.isRequired,
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
            <div>
                <div className="settings-search">
                    <div className="settings-search__icon">
                        <i className="material-icons">search</i>
                    </div>
                    <TextField
                        ref={(input) => {
                            this.textField = input;
                        }}
                        fullWidth
                        hintText="Search..."
                        underlineFocusStyle={{
                            borderWidth: '1px',
                        }}
                    />
                </div>
                <div className="settings-search__search-type">
                    <Toggle
                        label="Strict mode"
                        style={styles.toggle}
                        trackStyle={{ backgroundColor: 'white' }}
                        thumbStyle={{ backgroundColor: 'grey' }}
                        onToggle={this.props.onChangeSearchMode}
                    />
                </div>
            </div>
        );
    }
}
