import { connect } from 'react-redux';

import { getContentValues, getContextsValues, getDimensionsValues } from 'main/tools/selectors';
import { setActiveContextField, setActiveDimensionField, searchValues, setActiveValue, changeSearchMode } from 'main/actions/main-actions';

import Settings from 'main/components/settings/settings';

const mapStateToProps = (state, props) => ({
    dimensionsFields: getDimensionsValues(state.filtersTables, props),
    contextsFields: getContextsValues(state.filtersTables, props),
    contentValues: getContentValues(state.filtersTables, props),
    activeContentValues: state.filtersTables.getIn(['settingsStates', props.id, 'contentValues']),
});

const mapDispatchToProps = dispatch => ({
    setActiveContextField: (id, fieldId) => dispatch(setActiveContextField(id, fieldId)),
    setActiveDimensionField: (id, fieldId) => dispatch(setActiveDimensionField(id, fieldId)),
    searchValues: (id, searchString) => dispatch(searchValues(id, searchString)),
    setActiveValue: (id, valueId) => dispatch(setActiveValue(id, valueId)),
    changeSearchMode: id => dispatch(changeSearchMode(id)),
});

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;
