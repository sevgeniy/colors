import React, { useState } from 'react';
import AddColorForm from './AddColorForm';
import Color from './models/Color';
import ColorList from './ColorList';
import { createStore, combineReducers } from 'redux';
import ColorsReducer from './reducers/ColorsReducer';
import SortReducer from './reducers/SortReducer';

function App() {
    const initialState: { colors: Color[]; sortBy: string } = {
        colors: [new Color('red', 'red', 2), new Color('blue', 'blue', 4)],
        sortBy: 'SORT_BY_NAME',
    };

    const store = createStore(
        combineReducers({
            colors: ColorsReducer,
            sortBy: SortReducer,
        }),
        initialState
    );

    const [colors, setColors] = useState<Array<Color>>([]);

    const addColorHandler = (title: string, value: string): void => {
        setColors([...colors, new Color(title, value)]);
    };

    const rateColorHandler = (id: string, rating: number): void => {
        setColors(
            colors.map((color) =>
                color.Id === id
                    ? new Color(color.Title, color.Value, rating, color.Id)
                    : color
            )
        );
    };

    const removeColorHandler = (id: string): void => {
        setColors(colors.filter((color) => color.Id !== id));
    };

    return (
        <div>
            <AddColorForm onNewColor={addColorHandler} />
            <ColorList
                colors={store.getState().colors}
                onRateColor={rateColorHandler}
                onRemoveColor={removeColorHandler}
            />
        </div>
    );
}

export default App;
