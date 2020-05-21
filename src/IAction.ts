import ColorModel from './models/Color';
import Actions from './Actions';

interface IAction {
    payload: { color: ColorModel; sortBy: string };
    type: Actions;
}

export default IAction;
