import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as actions from './actions/timetableActions';
import * as types from './constants/ActionTypes';


describe('actions', () => {
    it('should create an action and fetch data', () => {
        const busData = 'Sydney Buses';
        const expectedAction = {
            type: types.FETCH_TIMETABLE_SUCCESS,
            busData
        };
        expect(actions.loadTimetableSuccess(busData)).toEqual(expectedAction)
    })
});