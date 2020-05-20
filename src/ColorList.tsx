import React, { FunctionComponent } from 'react';
import Color from './Color';
import ColorModel from './models/Color';

interface IColorListProps {
    colors: ColorModel[];
    onRateColor: (id: string, rating: number) => void;
    onRemoveColor: (id: string) => void;
}

const ColorList: FunctionComponent<IColorListProps> = ({
    colors,
    onRateColor,
    onRemoveColor,
}) => {
    return (
        <div>
            {colors.map((color) => (
                <Color
                    key={color.Id}
                    id={color.Id}
                    title={color.Title}
                    value={color.Value}
                    rating={color.Rating}
                    onRate={onRateColor}
                    onRemove={onRemoveColor}
                />
            ))}
        </div>
    );
};

export default ColorList;
