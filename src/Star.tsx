import React, { ReactEventHandler, FunctionComponent } from 'react';

interface IStarProps {
    isSelected: boolean;
    onClick: ReactEventHandler;
}

const Star: FunctionComponent<IStarProps> = ({ isSelected, onClick }) => {
    return (
        <div
            className={isSelected ? 'star star--selected' : 'star'}
            onClick={onClick}
        ></div>
    );
};

export default Star;
