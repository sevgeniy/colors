import ColorModel from './models/Color';
import ColorsState from './models/ColorsState';

const initialData: ColorsState = new ColorsState(
    [new ColorModel('red', 'red', 1), new ColorModel('blue', 'blue', 2)],
    'SORT_BY_NAME'
);

export default initialData;
