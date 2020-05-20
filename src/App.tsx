import React from 'react';
import AddColorForm from './AddColorForm';

function App() {
    const onNewColor = (
        title: string | undefined,
        color: string | undefined
    ): void => {
        console.log(`title: ${title}.`);
        console.log(`color: ${color}.`);
    };

    return <AddColorForm onNewColor={onNewColor} />;
}

export default App;
