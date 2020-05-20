import ColorModel from '../models/Color';
import IAction from '../IAction';

const ColorReducer = (
    state: ColorModel | {} = {},
    action: IAction
): ColorModel => {
    const { payload, type } = action;
    const { Title, Value, Rating, Id } = payload.color;

    switch (type) {
        case 'ADD_COLOR':
            return new ColorModel(Title, Value, Rating);
        case 'RATE_COLOR':
            return (state as ColorModel).Id === Id
                ? new ColorModel(Title, Value, Rating, Id)
                : (state as ColorModel);
        default: {
            return state as ColorModel;
        }
    }
};

export default ColorReducer;
