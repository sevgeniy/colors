import React, { FunctionComponent } from 'react';
import Color from './Color';
import ColorModel from './models/Color';
import { Store } from 'redux';
import IAppState from './IAppState';
import IAction from './IAction';

interface IColorListProps {
    onRateColor: (id: string, rating: number) => void;
    onRemoveColor: (id: string) => void;
    store: Store<IAppState, IAction>;
}

const ColorList: FunctionComponent<IColorListProps> = ({
    store,
    onRateColor,
    onRemoveColor,
}) => {
    const { colors } = store.getState();

    return (
        <div>
            {colors.map((color: ColorModel, index: number) => (
                <div key={index}>
                    <Color
                        key={color.id}
                        id={color.id}
                        title={color.title}
                        value={color.value}
                        rating={color.rating}
                        onRate={onRateColor}
                        onRemove={onRemoveColor}
                    />
                </div>
            ))}
        </div>
    );
};

export default ColorList;
