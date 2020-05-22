import { combineReducers, createStore, applyMiddleware } from 'redux';
import ColorsReducer from './reducers/ColorsReducer';
import SortReducer from './reducers/SortReducer';
import ColorsState from './models/ColorsState';

const APP_KEY: string = 'colors-app-state';

const logger = (store: any) => (next: (action: any) => any) => (
    action: any
) => {
    console.groupCollapsed('dispatching', action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    next(action);
    console.log('next state', store.getState());
    console.groupEnd();
};

const saver = (store: any) => (next: any) => (action: any) => {
    let result = next(action);
    localStorage[APP_KEY] = JSON.stringify(store.getState());
    return result;
};

const defaultState = localStorage[APP_KEY]
    ? ColorsState.fromJSON(localStorage[APP_KEY])
    : { colors: [], sortBy: '' };

const storeFactory = (initialState = { colors: [], sortBy: '' }) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({
            colors: ColorsReducer,
            sortBy: SortReducer,
        }),
        { colors: defaultState.colors, sortBy: defaultState.sortBy }
    );

export default storeFactory;
