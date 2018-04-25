const data = require('../bus-services-data');

export function loadTimetable() { //thunk
    return function(dispatch) {
        let organisation = data.data.map(organisation => {
            return organisation.organisation
        });

        let busData = data.data.map(busData => {
            return busData
        });

        dispatch(loadTimetableSuccess(busData))

    }
}

export function loadTimetableSuccess(busData) {
    return {
        type: 'FETCH_TIMETABLE_SUCCESS',
        busData: busData
    }
}