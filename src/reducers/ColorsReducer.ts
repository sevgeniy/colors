import ColorModel from '../models/Color';
import IAction from '../IAction';
import Actions from '../Actions';
import ColorReducer from './ColorReducer';

const ColorsReducer = (
    state: ColorModel[] = [],
    action: IAction
): ColorModel[] => {
    const { type, payload } = action;

    switch (type) {
        case Actions.ADD_COLOR:
            return [...state, ColorReducer({}, action)];
        case Actions.RATE_COLOR:
            return state.map((c) =>
                c.id === action.payload.color.id ? ColorReducer(c, action) : c
            );
        case Actions.REMOVE_COLOR:
            return state.filter((color) => color.id !== payload.color.id);
        default:
            return state;
    }
};

export default ColorsReducer;
