import ColorModel from './models/Color';
import ActionTypes from './ActionTypes';

interface IAction {
    payload: { color: ColorModel; sortBy: string };
    type: ActionTypes;
}

export default IAction;
