import React, { useState } from 'react';
import AddColorForm from './AddColorForm';
import Color from './models/Color';
import ColorList from './ColorList';

function App() {
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
                colors={colors}
                onRateColor={rateColorHandler}
                onRemoveColor={removeColorHandler}
            />
        </div>
    );
}

export default App;
