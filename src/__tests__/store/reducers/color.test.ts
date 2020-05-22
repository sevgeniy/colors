import ColorModel from '../../../models/Color';
import IAction from '../../../IAction';
import Color from '../../../models/Color';
import Actions from '../../../Actions';
import ColorReducer from '../../../reducers/ColorReducer';

const ID_LENGTH: number = 36;

describe('color Reducer', () => {
    it('add color success', () => {
        const color = { title: 'red', value: 'red value', rating: 3 };
        const state: ColorModel[] | {} = {};
        const action: IAction = {
            type: Actions.ADD_COLOR,
            payload: {
                color: new Color(color.title, color.value, color.rating),
                sortBy: '',
            },
        };

        const result = ColorReducer(state, action);

        assertColor(result, color.title, color.value, color.rating);
    });

    it('rate color success', () => {
        const color = {
            rating: 3,
            id: 'a288b722-4368-4c23-8d18-0b77c6b01791',
        };
        const state: ColorModel[] | {} = {
            title: 'red',
            value: 'red value',
            rating: 5,
            id: 'a288b722-4368-4c23-8d18-0b77c6b01791',
        };
        const action: IAction = {
            type: Actions.RATE_COLOR,
            payload: {
                color: new Color('', '', color.rating, color.id),
                sortBy: '',
            },
        };

        const result = ColorReducer(state, action);
        assertColor(result, undefined, undefined, color.rating);
    });

    function assertColor(
        actualColor: ColorModel,
        expectedTitle?: string,
        expectedValue?: string,
        expectedRating?: number,
        expectedId?: string
    ) {
        const { title, value, rating, id } = actualColor;

        expectedTitle !== undefined && expect(title).toEqual(expectedTitle);
        expectedValue !== undefined && expect(value).toEqual(expectedValue);
        expectedRating !== undefined && expect(rating).toEqual(expectedRating);

        expectedId !== undefined
            ? expect(id).toEqual(expectedId)
            : expect(id).toHaveLength(ID_LENGTH);
    }
});
