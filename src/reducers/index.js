import {combineReducers} from 'redux';
import timetableReducer from './timetableReducer';

const rootReducers = combineReducers({
    timetable: timetableReducer
});

export default rootReducers;