import IAction from '../IAction';
import Actions from '../Actions';

const SortReducer = (
    state: string = 'SORT_BY_NAME',
    action: IAction
): string => {
    const { type, payload } = action;

    switch (type) {
        case Actions.SORT_COLORS:
            return payload.sortBy;
        default: {
            return state;
        }
    }
};

export default SortReducer;
