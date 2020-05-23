import React from 'react';
import ColorList from '../../ColorList';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Color from '../../models/Color';
import * as AppContext from '../../AppContext';

configure({ adapter: new Adapter() });

jest.mock('../../Color', () => ({ id, rating, onRate }) => (
    <div className="mock-color">
        <button className="rate" onClick={() => onRate(1)}></button>
    </div>
));

describe('<ColorList />', () => {
    describe('rating a color', () => {
        const _rate = jest.fn();

        const store = {
            getState: jest.fn(() => {
                return {
                    colors: [
                        new Color(
                            'red',
                            'red',
                            2,
                            '9094ec55-0c1e-4b81-85d3-a5fbac0610bd'
                        ),
                        new Color(
                            'blue',
                            'blue',
                            3,
                            '6d1cd8bb-9f1c-4d81-8643-5066d108269a'
                        ),
                        new Color(
                            'black',
                            'black',
                            4,
                            '7sd4ec55-3f1c-4d81-8643-a5fbac0610bd'
                        ),
                    ],
                    sortBy: '',
                };
            }),
            dispatch: _rate,
        };

        jest.spyOn(AppContext, 'useAppContext').mockImplementation(() => store);

        beforeAll(() => {
            mount(<ColorList onRate={_rate} />)
                .find('button.rate')
                .first()
                .simulate('click');
        });

        it('invokes onRate handler', () => {
            expect(_rate).toBeCalled();
        });
    });
});
