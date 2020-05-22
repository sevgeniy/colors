import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import AppContext from './AppContext';
import storeFactory from './storeFactory';

const store = storeFactory({ colors: [], sortBy: '' });

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
