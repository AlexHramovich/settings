import { Record, List, Map } from 'immutable';

import {
    START_GET_TABLES,
    SUCCESS_GETTING_TABLES,
    CHANGE_ACTIVE_CONTEXTS_FIELDS,
    CHANGE_ACTIVE_DIMENSIONS_FIELDS,
    SET_SETTINGS_DEFAULT_STATE,
    SET_SEARCH_STRING,
    SET_ACTIVE_CONTENT_VALUE,
} from 'main/constants/main-constants';

const StateRecord = Record({
    isLoading: false,
    dataTables: List(),
    settingsStates: Map({}),
});

const SettingsStateRecord = Map({
    searchString: '',
    contextsFields: List(),
    dimensionsFields: List(),
    contentValues: List(),
});

export default function MainReducer(state = StateRecord(), action) {
    switch (action.type) {
    case START_GET_TABLES:
        return state.set('isLoading', true);

    case SUCCESS_GETTING_TABLES:
        return state.set('dataTables', action.tables).set('isLoading', false);

    case SET_SETTINGS_DEFAULT_STATE:
        return state.setIn(['settingsStates', action.id], SettingsStateRecord);

    case CHANGE_ACTIVE_CONTEXTS_FIELDS: {
        const { fieldId } = action;
        let activeFields = state
            .get('settingsStates')
            .get(action.id)
            .get('contextsFields');
        const fieldIndex = activeFields.indexOf(fieldId);

        if (fieldIndex > -1) {
            activeFields = activeFields.splice(fieldIndex, 1);
        } else {
            activeFields = activeFields.push(fieldId);
        }

        return state.setIn(['settingsStates', action.id, 'contextsFields'], activeFields);
    }

    case SET_SEARCH_STRING:
        return state.setIn(['settingsStates', action.id, 'searchString'], action.searchString);

    case SET_ACTIVE_CONTENT_VALUE: {
        const { valueId } = action;
        let activeValues = state
            .getIn(['settingsStates', action.id, 'contentValues'])
            .push(action.id);

        const fieldIndex = activeValues.indexOf(valueId);

        if (fieldIndex > -1) {
            activeValues = activeValues.splice(fieldIndex, 1);
        } else {
            activeValues = activeValues.push(valueId);
        }

        return state.setIn(['settingsStates', action.id, 'contentValues'], activeValues);
    }

    case CHANGE_ACTIVE_DIMENSIONS_FIELDS: {
        const { fieldId } = action;
        let activeFields = state
            .get('settingsStates')
            .get(action.id)
            .get('dimensionsFields');
        const fieldIndex = activeFields.indexOf(fieldId);

        if (fieldIndex > -1) {
            activeFields = activeFields.splice(fieldIndex, 1);
        } else {
            activeFields = activeFields.push(fieldId);
        }

        return state.setIn(['settingsStates', action.id, 'dimensionsFields'], activeFields);
    }

    default:
        return state;
    }
}
