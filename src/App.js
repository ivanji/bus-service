import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as timetableActions from './actions/timetableActions';

import TimeTable from './components/TimeTable';
import NoResults from './components/NoResults'

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <h1>Bus Reports</h1>
            {
                this.props.timetable.length > 0 ?
                  <TimeTable busData={this.props.timetable} /> :
                  <NoResults />
            }
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        timetable: state.timetable.busData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filterActions: bindActionCreators(timetableActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
