import React, { FunctionComponent, useContext } from 'react';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import { Store } from 'redux';
import {
    addColor,
    rateColor,
    removeColor,
} from './actionCreators/colorActions';
import IAction from './IAction';
import IAppState from './IAppState';
import AppContext from './AppContext';

interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => {
    const store = useContext(AppContext) as Store<IAppState, IAction>;

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
            <AddColorForm />
            <ColorList />
        </div>
    );
};

export default App;
