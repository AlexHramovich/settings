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

import { getCorrectContextFields, getCorrectDimensionsFields, getCorrectValueFields } from 'main/managers/settings-manager';

import { getTables } from 'main/controllers/controller';

export const sendActiveContextField = (correctContextFields, settingsId) => ({
    type: CHANGE_ACTIVE_CONTEXTS_FIELDS,
    contextFields: correctContextFields,
    id: settingsId,
});

export const setActiveContextField = (settingsId, id) => (dispatch, getState) => {
    const state = getState().filtersTables;
    const correctContextFields = getCorrectContextFields(state, settingsId, id);

    dispatch(sendActiveContextField(correctContextFields, settingsId));
};

export const sendActiveDimensionField = (correctDimensionsFields, settingsId) => ({
    type: CHANGE_ACTIVE_DIMENSIONS_FIELDS,
    id: settingsId,
    dimensionsFields: correctDimensionsFields,
});

export const setActiveDimensionField = (settingsId, id) => (dispatch, getState) => {
    const state = getState().filtersTables;
    const correctDimensionsFields = getCorrectDimensionsFields(state, settingsId, id);

    dispatch(sendActiveDimensionField(correctDimensionsFields, settingsId));
};

export const sendActiveValue = (correctValueFields, settingsId) => ({
    type: SET_ACTIVE_CONTENT_VALUE,
    id: settingsId,
    contentValues: correctValueFields,
});

export const setActiveValue = (settingsId, id) => (dispatch, getState) => {
    const state = getState().filtersTables;
    const correctValueFields = getCorrectValueFields(state, settingsId, id);

    dispatch(sendActiveValue(correctValueFields, settingsId));
};

export const initDefaultSettingsState = settingsId => ({
    type: SET_SETTINGS_DEFAULT_STATE,
    id: settingsId,
});

export const searchValues = (settingsId, searchStr) => ({
    type: SET_SEARCH_STRING,
    id: settingsId,
    searchString: searchStr,
});

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

export const changeSearchMode = settingsId => ({
    type: CHANGE_SETTINGS_SEARCH_MODE,
    id: settingsId,
});
