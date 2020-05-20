import React from 'react';
import AddColorForm from './AddColorForm';
import StarRating from './StarRating';

function App() {
    const onNewColor = (
        title: string | undefined,
        color: string | undefined
    ): void => {
        console.log(`title: ${title}.`);
        console.log(`color: ${color}.`);
    };

    return (
        <div>
            <StarRating />
            <AddColorForm onNewColor={onNewColor} />
        </div>
    );
}

export default App;
