import React, { useState, FunctionComponent } from 'react';
import Star from './Star';

const DefaultTotalStars = 5;

interface IStarRatingProps {
    totalStars?: number;
    starsSelected?: number;
    onRate: (rating: number) => void;
}

const StarRating: FunctionComponent<IStarRatingProps> = ({
    totalStars = DefaultTotalStars,
    onRate,
    starsSelected: initialStarsSelected = 0,
}) => {
    const [starsSelected, setStarsSelected] = useState(initialStarsSelected);

    const handleStarClick = (stars: number) => {
        setStarsSelected(stars);
        onRate(stars);
    };

    return (
        <div>
            {[...new Array(totalStars)].map((item, index) => {
                return (
                    <Star
                        key={index}
                        isSelected={index + 1 <= starsSelected}
                        onClick={() => handleStarClick(index + 1)}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
