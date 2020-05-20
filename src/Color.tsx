import React, { FunctionComponent } from 'react';
import StarRating from './StarRating';
import './color.css';

interface IColorProps {
    title: string;
    value: string;
    rating: number;
}

const Color: FunctionComponent<IColorProps> = ({
    title,
    value,
    rating,
}): JSX.Element => {
    return (
        <div className="color">
            <h2 className="color__title">{title}</h2>
            <div
                className="color__value"
                style={{ backgroundColor: value }}
            ></div>
            <div className="color__rating">
                <StarRating starsSelected={rating} />
            </div>
        </div>
    );
};

export default Color;
