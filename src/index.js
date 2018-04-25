import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import {loadTimetable} from './actions/timetableActions';

import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(loadTimetable()); //on SSR we'd use a different approach

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
