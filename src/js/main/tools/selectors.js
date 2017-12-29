import { createSelector } from 'reselect';
import Fuse from 'fuse.js';

const getSearchOptions = (mode) => {
    const thresholdValue = mode ? 0 : 0.3;

    return {
        keys: ['name'],
        caseSensitive: true,
        findAllMatches: true,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        threshold: thresholdValue,
    };
};

const getContextFields = (state, props) =>
    state.getIn(['settingsStates', props.id, 'contextsFields']);
const getDimensionsFields = (state, props) =>
    state.getIn(['settingsStates', props.id, 'dimensionsFields']);
const getDataTable = state => state.get('dataTables');
const getSearchString = (state, props) => state.getIn(['settingsStates', props.id, 'searchString']);
const getSearchMode = (state, props) =>
    state.getIn(['settingsStates', props.id, 'strictSearchMode']);

export const getContentValues = createSelector(
    [getContextFields, getDimensionsFields, getDataTable, getSearchString, getSearchMode],
    (contextFields, dimensionsFields, dataTables, searchString, searchMode) => {
        let values = [];

        dataTables.forEach((table) => {
            if (contextFields.includes(table.get('id'))) {
                table.get('items').forEach((filter) => {
                    if (dimensionsFields.includes(filter.id)) {
                        filter.items.forEach(value => values.push(value));
                    }
                });
            }
        });

        const fuse = new Fuse(values, getSearchOptions(searchMode));

        if (searchString) {
            values = fuse.search(searchString);
        }

        return values;
    },
);

export const getContextsValues = createSelector(
    [getContextFields, getDataTable],
    (contextFields, dataTables) => {
        const values = [];

        dataTables.forEach((table) => {
            values.push({
                id: table.get('id'),
                name: table.get('name'),
            });
        });

        return values;
    },
);

export const getDimensionsValues = createSelector(
    [getContextFields, getDimensionsFields, getDataTable],
    (contextFields, dimensionsFields, dataTables) => {
        const values = [];

        dataTables.forEach((table) => {
            if (contextFields.includes(table.get('id'))) {
                table.get('items').forEach((filter) => {
                    values.push(filter);
                });
            }
        });

        return values;
    },
);
