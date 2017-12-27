import { connect } from 'react-redux';

import { fetchTables, initDefaultSettingsState } from 'main/actions/main-actions';

import Main from 'main/components/main/main';

const mapStateToProps = state => ({
    isLoading: state.filtersTables.get('isLoading'),
});

const mapDispatchToProps = dispatch => ({
    fetchTables: () => dispatch(fetchTables()),
    initDefaultSettingsState: id => dispatch(initDefaultSettingsState(id)),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
