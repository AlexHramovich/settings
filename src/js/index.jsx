import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MainReducer from 'main/reducers/main-reducer';

import MainContainer from 'main/containers/main-container';

import './index.scss';

const reducer = combineReducers({
    filtersTables: MainReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Provider store={store}>
            <MainContainer />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app'),
);
