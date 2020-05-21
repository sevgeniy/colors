import ColorModel from '../models/Color';
import IAction from '../IAction';
import Actions from '../Actions';

const ColorReducer = (
    state: ColorModel | {} = {},
    action: IAction
): ColorModel => {
    const { payload, type } = action;
    const { title, value, rating, id } = payload.color;

    switch (type) {
        case Actions.ADD_COLOR:
            return new ColorModel(title, value, rating);
        case Actions.RATE_COLOR:
            let s = state as ColorModel;
            return new ColorModel(s.title, s.value, rating, id);
        default: {
            return state as ColorModel;
        }
    }
};

export default ColorReducer;
