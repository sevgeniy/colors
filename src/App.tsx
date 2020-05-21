import React, { FunctionComponent } from 'react';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import Color from './models/Color';
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

interface IAppProps {
    store: Store<IAppState, IAction>;
}

const App: FunctionComponent<IAppProps> = ({ store }) => {
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
};

export default App;
