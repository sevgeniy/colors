import React, { FunctionComponent } from 'react';
import Color from './Color';
import ColorModel from './models/Color';

interface IColorListProps {
    colors: ColorModel[];
}

const ColorList: FunctionComponent<IColorListProps> = ({ colors }) => {
    return (
        <div>
            {colors.map((color) => (
                <Color
                    key={color.Id}
                    title={color.Title}
                    value={color.Value}
                    rating={color.Rating}
                />
            ))}
        </div>
    );
};

export default ColorList;
