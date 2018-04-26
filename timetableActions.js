const data = require('../bus-services-data');
const types = require('../constants/ActionTypes');

export function loadTimetable() { //thunk
    return function(dispatch) {

        let busData = data.data.map(busData => {
            return busData
        });

        dispatch(loadTimetableSuccess(busData))

    }
}

export function loadTimetableSuccess(busData) {
    return {
        type: types.FETCH_TIMETABLE_SUCCESS,
        busData: busData
    }
}