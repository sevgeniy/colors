import IAction from '../IAction';
import Actions from '../Actions';
import Color from '../models/Color';

export const addColor = (
    title: string,
    value: string,
    rating?: number
): IAction => {
    return {
        type: Actions.ADD_COLOR,
        payload: {
            color: new Color(title, value, rating),
            sortBy: '',
        },
    };
};

export const rateColor = (id: string, rating: number): IAction => {
    return {
        type: Actions.RATE_COLOR,
        payload: {
            color: new Color('', '', rating, id),
            sortBy: '',
        },
    };
};

export const removeColor = (id: string): IAction => {
    return {
        type: Actions.REMOVE_COLOR,
        payload: {
            color: new Color('', '', 0, id),
            sortBy: '',
        },
    };
};
