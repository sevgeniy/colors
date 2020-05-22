import React from 'react';
import Star from '../../Star';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Star />', () => {
    it('renders not selected star', () => {
        expect(shallow(<Star />).find('div.star.star--selected').length).toBe(
            0
        );

        expect(shallow(<Star />).find('div.star').length).toBe(1);
    });

    it('renders selected star', () => {
        expect(
            shallow(<Star isSelected={true} />).find('div.star.star--selected')
                .length
        ).toBe(1);
    });

    it('invokes onClick', () => {
        const _click = jest.fn();
        shallow(<Star isSelected={false} onClick={_click} />)
            .find('div.star')
            .simulate('click');

        expect(_click).toBeCalled();
    });
});
