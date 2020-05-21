import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers, Store } from 'redux';
import ColorsReducer from './reducers/ColorsReducer';
import SortReducer from './reducers/SortReducer';
import ColorsState from './models/ColorsState';
import IAction from './IAction';
import IAppState from './IAppState';
import AppContext from './AppContext';

const APP_KEY: string = 'colors-app-state';

const initialState: IAppState = localStorage[APP_KEY]
    ? ColorsState.fromJSON(localStorage[APP_KEY])
    : { colors: [], sortBy: '' };

const store: Store<IAppState, IAction> = createStore(
    combineReducers<IAppState>({
        colors: ColorsReducer,
        sortBy: SortReducer,
    }),
    {
        colors: initialState.colors,
        sortBy: initialState.sortBy,
    }
);

store.subscribe(() => {
    localStorage[APP_KEY] = JSON.stringify(store.getState());
});

const render = () =>
    ReactDOM.render(
        <React.StrictMode>
            <AppContext.Provider value={store}>
                <App />
            </AppContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

store.subscribe(render);

render();
