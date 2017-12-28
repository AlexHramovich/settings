export const getCorrectContextFields = (state, settingsId, id) => {
    let activeFields = state.getIn(['settingsStates', settingsId, 'contextsFields']);
    const fieldIndex = activeFields.indexOf(id);

    if (fieldIndex > -1) {
        activeFields = activeFields.splice(fieldIndex, 1);
    } else {
        activeFields = activeFields.push(id);
    }

    return activeFields;
};

export const getCorrectDimensionsFields = (state, settingsId, id) => {
    let activeFields = state.getIn(['settingsStates', settingsId, 'dimensionsFields']);
    const fieldIndex = activeFields.indexOf(id);

    if (fieldIndex > -1) {
        activeFields = activeFields.splice(fieldIndex, 1);
    } else {
        activeFields = activeFields.push(id);
    }

    return activeFields;
};

export const getCorrectValueFields = (state, settingsId, id) => {
    let activeValues = state.getIn(['settingsStates', settingsId, 'contentValues']);
    const fieldIndex = activeValues.indexOf(id);

    if (fieldIndex > -1) {
        activeValues = activeValues.splice(fieldIndex, 1);
    } else {
        activeValues = activeValues.push(id);
    }

    return activeValues;
};
