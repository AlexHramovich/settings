import { Record, List, Map } from 'immutable';

import {
    START_GET_TABLES,
    SUCCESS_GETTING_TABLES,
    CHANGE_ACTIVE_CONTEXTS_FIELDS,
    CHANGE_ACTIVE_DIMENSIONS_FIELDS,
    SET_SETTINGS_DEFAULT_STATE,
    SET_SEARCH_STRING,
    SET_ACTIVE_CONTENT_VALUE,
    CHANGE_SETTINGS_SEARCH_MODE,
} from 'main/constants/main-constants';

const StateRecord = Record({
    isLoading: false,
    dataTables: List(),
    settingsStates: Map(),
});

const SettingsStateRecord = Map({
    searchString: '',
    contextsFields: List(),
    dimensionsFields: List(),
    contentValues: List(),
    strictSearchMode: false,
});

export default function MainReducer(state = StateRecord(), action) {
    switch (action.type) {
    case START_GET_TABLES:
        return state.set('isLoading', true);

    case SUCCESS_GETTING_TABLES:
        return state.set('dataTables', action.tables).set('isLoading', false);

    case CHANGE_SETTINGS_SEARCH_MODE:
        return state.setIn(
            ['settingsStates', action.id, 'strictSearchMode'],
            !state.getIn(['settingsStates', action.id, 'strictSearchMode']),
        );

    case SET_SETTINGS_DEFAULT_STATE:
        return state.setIn(['settingsStates', action.id], SettingsStateRecord);

    case CHANGE_ACTIVE_CONTEXTS_FIELDS:
        return state.setIn(
            ['settingsStates', action.id, 'contextsFields'],
            action.contextFields,
        );

    case SET_SEARCH_STRING:
        return state.setIn(['settingsStates', action.id, 'searchString'], action.searchString);

    case SET_ACTIVE_CONTENT_VALUE:
        return state.setIn(
            ['settingsStates', action.id, 'contentValues'],
            action.contentValues,
        );

    case CHANGE_ACTIVE_DIMENSIONS_FIELDS:
        return state.setIn(
            ['settingsStates', action.id, 'dimensionsFields'],
            action.dimensionsFields,
        );

    default:
        return state;
    }
}
