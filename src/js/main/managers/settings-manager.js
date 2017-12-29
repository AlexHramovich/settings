export const getValue = (state, settingsId, id, valueName) => {
    let activeValues = state.getIn(['settingsStates', settingsId, valueName]);
    const fieldIndex = activeValues.indexOf(id);

    if (fieldIndex > -1) {
        activeValues = activeValues.splice(fieldIndex, 1);
    } else {
        activeValues = activeValues.push(id);
    }

    return activeValues;
};

export const getCorrectContextFields = (state, settingsId, id) => getValue(state, settingsId, id, 'contextsFields');
export const getCorrectDimensionsFields = (state, settingsId, id) => getValue(state, settingsId, id, 'dimensionsFields');
export const getCorrectValueFields = (state, settingsId, id) => getValue(state, settingsId, id, 'contentValues');
