import {
    START_GET_TABLES,
    SUCCESS_GETTING_TABLES,
    CHANGE_ACTIVE_CONTEXTS_FIELDS,
    CHANGE_ACTIVE_DIMENSIONS_FIELDS,
    SET_SETTINGS_DEFAULT_STATE,
    SET_SEARCH_STRING,
    SET_ACTIVE_CONTENT_VALUE,
} from 'main/constants/main-constants';

import { getTables } from 'main/controllers/controller';

export const successGettingTables = tables => ({
    type: SUCCESS_GETTING_TABLES,
    tables,
});

export const startGettingTables = () => ({
    type: START_GET_TABLES,
});

export const fetchTables = settingsId => (dispatch) => {
    dispatch(startGettingTables());

    return getTables().then((result) => {
        dispatch(successGettingTables(result, settingsId));
    });
};

export const setActiveContextField = (settingsId, id) => ({
    type: CHANGE_ACTIVE_CONTEXTS_FIELDS,
    id: settingsId,
    fieldId: id,
});

export const setActiveDimensionField = (settingsId, id) => ({
    type: CHANGE_ACTIVE_DIMENSIONS_FIELDS,
    id: settingsId,
    fieldId: id,
});

export const initDefaultSettingsState = settingsId => ({
    type: SET_SETTINGS_DEFAULT_STATE,
    id: settingsId,
});

export const searchValues = (settingsId, searchStr) => ({
    type: SET_SEARCH_STRING,
    id: settingsId,
    searchString: searchStr,
});

export const setActiveValue = (settingsId, id) => ({
    type: SET_ACTIVE_CONTENT_VALUE,
    id: settingsId,
    valueId: id,
});
