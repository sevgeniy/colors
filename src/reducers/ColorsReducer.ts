import ColorModel from '../models/Color';
import IAction from '../IAction';
import ColorReducer from './ColorReducer';

const ColorsReducer = (
    state: ColorModel[] = [],
    action: IAction
): ColorModel[] => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_COLOR':
            return [...state, ColorReducer({}, action)];
        case 'RATE_COLOR':
            return state.map((c) => ColorReducer(c, action));
        case 'REMOVE_COLOR':
            return state.filter((color) => color.Id !== payload.color.Id);
        default:
            return state;
    }
};

export default ColorsReducer;
