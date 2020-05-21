import React from 'react';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import { createStore, combineReducers, Store } from 'redux';
import ColorsReducer from './reducers/ColorsReducer';
import SortReducer from './reducers/SortReducer';
import {
    addColor,
    rateColor,
    removeColor,
} from './actionCreators/colorActions';
import ColorsState from './models/ColorsState';
import IAction from './IAction';
import IAppState from './IAppState';

function App() {
    const APP_KEY: string = 'colors-app-state';

    const initialState: IAppState = localStorage[APP_KEY]
        ? ColorsState.fromJSON(localStorage[APP_KEY])
        : { colors: [], sortBy: '' };

    const store: Store<IAppState, IAction> = createStore(
        combineReducers({
            colors: ColorsReducer,
            sortBy: SortReducer,
        }),
        initialState
    );

    console.log(store.getState());

    store.subscribe(() => {
        localStorage[APP_KEY] = JSON.stringify(store.getState());
    });

    const addColorHandler = (title: string, value: string): void => {
        store.dispatch(addColor(title, value));
    };

    const rateColorHandler = (id: string, rating: number): void => {
        store.dispatch(rateColor(id, rating));
    };

    const removeColorHandler = (id: string): void => {
        store.dispatch(removeColor(id));
    };

    return (
        <div>
            <AddColorForm store={store} onNewColor={addColorHandler} />
            <ColorList
                store={store}
                onRateColor={rateColorHandler}
                onRemoveColor={removeColorHandler}
            />
        </div>
    );
}

export default App;
