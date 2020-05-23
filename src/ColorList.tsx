import React, { useContext, FunctionComponent } from 'react';
import Color from './Color';
import ColorModel from './models/Color';
import { Store } from 'redux';
import IAppState from './IAppState';
import IAction from './IAction';
import AppContext, { useAppContext } from './AppContext';
import { removeColor, rateColor } from './actionCreators/colorActions';

const ColorList: FunctionComponent = () => {
    // const store = useContext(AppContext) as Store<IAppState, IAction>;
    console.log('store from context', useAppContext());
    const store = useAppContext() as Store<IAppState, IAction>;

    const { colors, sortBy } = store.getState();

    const getSortFunction = (sortBy: string) => (
        a: ColorModel,
        b: ColorModel
    ): number => {
        if (sortBy === 'name') {
            return a.title > b.title ? 1 : -1;
        } else if (sortBy === 'value') {
            return a.value > b.value ? 1 : -1;
        } else if (sortBy === 'rating') {
            return a.rating > b.rating ? 1 : -1;
        } else if (sortBy === 'id') {
            return a.id > b.id ? 1 : -1;
        }

        return 0;
    };

    const getSortedColors = (
        colors: ColorModel[],
        sortBy: string
    ): ColorModel[] => {
        return colors.slice().sort(getSortFunction(sortBy));
    };

    const sortedColors = getSortedColors(colors, sortBy.toLowerCase());

    return (
        <div>
            {sortedColors.map((color: ColorModel, index: number) => (
                <div key={index}>
                    <Color
                        key={color.id}
                        id={color.id}
                        title={color.title}
                        value={color.value}
                        rating={color.rating}
                        onRate={(rating: number) =>
                            store.dispatch(rateColor(color.id, rating))
                        }
                        onRemove={() => store.dispatch(removeColor(color.id))}
                    />
                </div>
            ))}
        </div>
    );
};

export default ColorList;
