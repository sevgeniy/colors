import { createContext } from 'react';
import { createStore, Store } from 'redux';
import IAppState from './IAppState';
import IAction from './IAction';

// let store: Store<IAppState, IAction> | null = null;

const AppContext = createContext(new Object());

export default AppContext;
