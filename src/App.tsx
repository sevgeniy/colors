import React, { useState } from 'react';
import AddColorForm from './AddColorForm';
import Color from './models/Color';
import ColorList from './ColorList';

function App() {
    const [colors, setColors] = useState<Array<Color>>([]);

    const addColorHandler = (title: string, value: string): void => {
        setColors([...colors, new Color(title, value)]);
    };

    return (
        <div>
            <AddColorForm onNewColor={addColorHandler} />
            <ColorList colors={colors} />
        </div>
    );
}

export default App;
