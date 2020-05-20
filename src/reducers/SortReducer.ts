import IAction from '../IAction';

const SortReducer = (
    state: string = 'SORT_BY_NAME',
    action: IAction
): string => {
    const { type, payload } = action;

    switch (type) {
        case 'SORT_COLORS':
            return payload.sortBy;
        default: {
            return state;
        }
    }
};

export default SortReducer;
