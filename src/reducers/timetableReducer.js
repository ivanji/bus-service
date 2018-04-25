export default function timetableReducer(state = {busData: []}, action) {
    switch (action.type) {
        case 'FETCH_TIMETABLE_SUCCESS':
            return {...state, busData: action.busData};
        default:
            return state;
    }
}