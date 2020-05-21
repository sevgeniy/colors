import React, { useContext, FunctionComponent } from 'react';
import Color from './Color';
import ColorModel from './models/Color';
import { Store } from 'redux';
import IAppState from './IAppState';
import IAction from './IAction';
import AppContext from './AppContext';
import { removeColor, rateColor } from './actionCreators/colorActions';

interface IColorListProps {}

const ColorList: FunctionComponent<IColorListProps> = ({}) => {
    const store = useContext(AppContext) as Store<IAppState, IAction>;
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
