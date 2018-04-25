import {createStore, compose } from 'redux';
import rootReducer from '../reducers';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk) // other store enhancers, if any.
);

export default function configureStore(initialState) {
    return createStore(
        /*
         createStore is one of the main methods available within Redux and
         it takes a reducer as a required argument.
        */
        rootReducer,  // For simplicity we're combining all reducers into a single reducer using combineReducers method.
        initialState,
        enhancer
    )
}