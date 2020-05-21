import IAction from '../IAction';
import Actions from '../Actions';
import Color from '../models/Color';

export const sortColors = (sortBy: string): IAction => {
    return {
        type: Actions.SORT_COLORS,
        payload: {
            color: new Color('', ''),
            sortBy,
        },
    };
};
