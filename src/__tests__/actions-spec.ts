import { Store } from 'redux';
import Color from '../models/Color';
import storeFactory from '../storeFactory';
import IAppState from '../IAppState';
import IAction from '../IAction';
import { addColor } from '../actionCreators/colorActions';

const ID_LENGTH: number = 36;

describe('addColor', () => {
    let store: Store<IAppState, IAction>;

    const colors: Color[] = [
        new Color('red', 'red value', 1),
        new Color('black', 'black value', 2),
        new Color('green', 'green value', 3),
    ];

    beforeAll(() => {
        store = storeFactory({ colors: colors, sortBy: 'Name' });
        console.log('test state', store.getState());
        store.dispatch(addColor('orange', 'orange color value', 2));
    });

    it('should add new color', () => {
        expect(store.getState().colors.length).toBe(4);
    });

    it('should add unique id', () => {
        const actualColors = store.getState().colors;
        expect(actualColors[actualColors.length - 1].id.length).toBe(ID_LENGTH);
    });

    it('should add color title', () => {
        const actualColors = store.getState().colors;
        expect(actualColors[actualColors.length - 1].title).toBe('orange');
    });

    it('should add color value', () => {
        const actualColors = store.getState().colors;
        expect(actualColors[actualColors.length - 1].value).toBe(
            'orange color value'
        );
    });

    it('should add color rating1', () => {
        const actualColors = store.getState().colors;
        expect(actualColors[actualColors.length - 1].rating).toBe(2);
    });
});
