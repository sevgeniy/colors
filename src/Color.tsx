import React, { SyntheticEvent, FunctionComponent } from 'react';
import StarRating from './StarRating';
import './color.css';

interface IColorProps {
    id: string;
    title: string;
    value: string;
    rating: number;
    onRate: (id: string, rating: number) => void;
    onRemove: (id: string) => void;
}

const Color: FunctionComponent<IColorProps> = ({
    id,
    title,
    value,
    rating,
    onRate,
    onRemove,
}): JSX.Element => {
    const handleRateColor = (rating: number): void => onRate(id, rating);
    const handleRemoveColor = (e: SyntheticEvent): void => onRemove(id);

    return (
        <div className="color">
            <button onClick={handleRemoveColor}>X</button>
            <h2 className="color__title">{title}</h2>
            <div
                className="color__value"
                style={{ backgroundColor: value }}
            ></div>
            <div className="color__rating">
                <StarRating starsSelected={rating} onRate={handleRateColor} />
            </div>
        </div>
    );
};

export default Color;
